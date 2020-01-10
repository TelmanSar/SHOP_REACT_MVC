import React, {useState, useEffect} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Link} from "react-router-dom";
import ProductCard from "../../components/productCard";

const useStyles = makeStyles(theme => ({
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
}));

function Dashboard({
                       products,
                       getProducts,
                       categories,
                       cartProducts,
                       getCategories,
                       getProductsByCategory,
}) {
    const classes = useStyles();
    const [category, setCategory] = useState('0');
    const [totalQty, setTotalQty] = useState(0);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    useEffect(() => {
        let total = 0;
        const qtyValues = Object.values(cartProducts);
        if (qtyValues.length) {
            total = qtyValues.reduce((a, b) => a + b)
        }
        setTotalQty(total || 0)
    }, [cartProducts]);

    useEffect(() => {
        category === '0' ? getProducts() : getProductsByCategory(category)
    }, [category]);

    const handleCategoryChange = e => setCategory(e.target.value);

    return (
        <>
            <CssBaseline/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                            <IconButton to={'/cart'} component={Link}>
                                <ShoppingCartIcon style={{fontSize: 70}}/>
                            </IconButton>
                            Items in cart: {totalQty}
                        </Typography>
                    </Container>
                </div>
                {products.isLoading ? <LinearProgress/>
                 : (<Container className={classes.cardGrid} maxWidth="md">
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
                        {products.data.map(card =>(
                        <ProductCard key={card.id}
                            card={card}
                        />))}
                    </Grid>
                </Container>)}
            </main>
        </>
    );
}

const mapStateToProps = state => ({
    products: state.products,
    categories: state.categories,
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