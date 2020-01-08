import React, {useState, useEffect} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import StoreIcon from '@material-ui/icons/Store';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {cntrlGetProducts, rxAddProductToCart, rxRemoveProductFromCart} from "../../../state-management/actions/productsAction";
import {cntrlGetCategories, cntrlGetProductsByCategory} from "../../../state-management/actions/categoriesAction";
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

function Dashboard({products, getProducts, categories, getCategories, productsByCategory, getProductsByCategory, addProductToCart, removeProductFromCart, cartProducts}) {
    const classes = useStyles();
    const [category, setCategory] = useState('0');
    // const [isProductsLoading, setIsProductsLoading] = useState(products.isLoading);
    const [cards, setCards] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [productQuantities, setProductQuantities] = useState({});

    const handleCategoryChange = e => setCategory(e.target.value);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    useEffect(()=>{
        let total = 0;
        const qtyValues = Object.values(cartProducts);
        if(qtyValues.length) {
            total = qtyValues.reduce((a, b)=> a+b)
        }
        setTotalQty(total || 0)
    }, [cartProducts]);

    useEffect(() => {
        category === '0' ? getProducts() : getProductsByCategory(category)
    }, [category]);

    useEffect(() => {
        if (category === '0' && !products.isLoading) setCards(products.data);
        if (category !== '0' && !productsByCategory.isLoading) setCards(productsByCategory.data);
    }, [products.isLoading, productsByCategory.isLoading]);

    const handleAddToCart = (id) => {
        if(!productQuantities[id] || productQuantities[id] === 0) return;
        addProductToCart({id, ['qty']: productQuantities[id]})
    };

    const handleRemoveFromCart = (id) => {
        if(!productQuantities[id] || productQuantities[id] === 0) return;
        removeProductFromCart({id, ['qty']: productQuantities[id]})
    };

    const handleQtyChange = (id, e) => {
        setProductQuantities({
           ...productQuantities,
           [id]: Number(e.target.value) < 0 ? 0 : Number(e.target.value),
       })
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <StoreIcon className={classes.icon} style={{fontSize: 40}}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Online Shop
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                            <ShoppingCartIcon style={{fontSize: 70}}/> Items in cart: {totalQty}
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                            Categories
                        </InputLabel>
                        <Select
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <MenuItem value="0">All products</MenuItem>
                            {categories.data.map(category => {
                                return (<MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card variant={"outlined"} className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.url}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            {"Price  $" + card.price}
                                        </Typography>
                                        <Typography>
                                            {card.description}
                                        </Typography>
                                        <TextField
                                            label="Quantity"
                                            value={productQuantities[card.id] ?  productQuantities[card.id] : 0 }
                                            onChange={(e) => handleQtyChange(card.id, e)}
                                            type='number'
                                        />
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained" color="primary" onClick={() => handleAddToCart(card.id)}>
                                            Add to cart
                                        </Button>
                                        {cartProducts[card.id] !== undefined && <Button size="small" variant="outlined" color="primary" onClick={() => handleRemoveFromCart(card.id)}>
                                            remove
                                        </Button>}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    products: state.products,
    categories: state.categories,
    productsByCategory: state.productsByCategory,
    cartProducts: state.cartProducts,
});


const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(cntrlGetProducts()),
    getCategories: () => dispatch(cntrlGetCategories()),
    getProductsByCategory: (categoryId) => dispatch(cntrlGetProductsByCategory(categoryId)),
    addProductToCart: (payload) => dispatch(rxAddProductToCart(payload)),
    removeProductFromCart: (payload) => dispatch(rxRemoveProductFromCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)