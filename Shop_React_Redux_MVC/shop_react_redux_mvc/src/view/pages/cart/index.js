import React, {useState, useEffect} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    cntrlGetProducts,
    rxAddProductToCart,
    rxRemoveProductFromCart
} from "../../../state-management/actions/productsAction";
import {cntrlMakeOrders} from '../../../state-management/actions/ordersAction'
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ProductCard from "../../components/productCard";

const useStyles = makeStyles(theme => ({
    heroContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const Cart = ({products, getProducts, addProductToCart, removeProductFromCart, cartProducts, makeOrder}) => {
    const classes = useStyles();
    // const [isProductsLoading, setIsProductsLoading] = useState(products.isLoading);
    const [cards, setCards] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        let total = 0;
        const qtyValues = Object.values(cartProducts);
        if (qtyValues.length) {
            total = qtyValues.reduce((a, b) => a + b)
        }
        setTotalQty(total || 0);
    }, [cartProducts]);

    useEffect(() => {
        setTotalPrice(cards.reduce((acc, card) => acc + card.price * cartProducts[card.id], 0))
    }, [cards]);

    useEffect(() => {
        getProducts().then(res => console.log(res));
    }, [getProducts]);

    useEffect(() => {
        const productsIds = Object.keys(cartProducts);
        setCards(productsIds.map(id => products.data.find(product => product.id === Number(id))));
    }, [cartProducts]);

    const handleRemoveFromCart = (id) => {
        if (!productQuantities[id] || productQuantities[id] === 0) return;
        removeProductFromCart({id, ['qty']: productQuantities[id]})
    };

    const handleAddToCart = (id) => {
        if (!productQuantities[id] || productQuantities[id] === 0) return;
        addProductToCart({id, ['qty']: productQuantities[id]})
    };

    const handleQtyChange = (id, e) => {
        setProductQuantities({
            ...productQuantities,
            [id]: Number(e.target.value) < 0 ? 0 : Number(e.target.value),
        })
    };

    const handleMakeOrders = () => {
        const orderProducts = {
            orderProducts: Object.entries(cartProducts).map( pair => ({
                productId: pair[0],
                quantity: pair[1]
            }))
        };
        makeOrder(orderProducts)
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <Container className={classes.heroContent}>
                    <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                        <IconButton>
                            <ShoppingCartIcon style={{fontSize: 35}}/>
                        </IconButton>
                        Items in cart: {totalQty}
                    </Typography>
                    <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
                        <IconButton>
                            <AttachMoneyIcon style={{fontSize: 35}}/>
                        </IconButton>
                        Total Price: {totalPrice}
                    </Typography>
                    <Button variant="contained" color="primary" disabled={!cards.length} onClick={handleMakeOrders}>
                        Make order
                    </Button>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {cards.map(card => (
                                <ProductCard
                                    card={card}
                                    productQuantities={productQuantities}
                                    handleQtyChange={handleQtyChange}
                                    products={cartProducts}
                                    handleAddToCart={handleAddToCart}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />))}
                        </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    products: state.products,
    cartProducts: state.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(cntrlGetProducts()),
    addProductToCart: (payload) => dispatch(rxAddProductToCart(payload)),
    removeProductFromCart: (payload) => dispatch(rxRemoveProductFromCart(payload)),
    makeOrder: (payload) => dispatch(cntrlMakeOrders(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)