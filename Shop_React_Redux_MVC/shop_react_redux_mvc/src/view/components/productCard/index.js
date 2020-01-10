import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import {
    rxAddProductToCart,
    rxRemoveProductFromCart
} from "../../../state-management/actions/productsAction";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        height: '170px',
        width: '160px'
    },
    cardContent: {
        flexGrow: 1,
    }
}));

const ProductCard = ({
                         card,
                         cartProducts,
                         addProductToCart,
                         removeProductFromCart,
                     }) => {
    const classes = useStyles();
    const [productQty, setProductQty] = useState(0);

    const handleQtyChange = (e) => {
        setProductQty(Number(e.target.value) < 0 ? 0 : Number(e.target.value));
    };


    const handleAddToCart = id => {
        if (productQty === 0) return;
        addProductToCart({id, ['qty']: productQty})
    };

    const handleRemoveFromCart = id => {
        if (productQty === 0) return;
        removeProductFromCart({id, ['qty']: productQty})
    };


    return (
        <Grid item xs={12} sm={6} md={4}>
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
                    <Typography>
                        {cartProducts[card.id] ? "In cart " + cartProducts[card.id] : "In cart 0"}
                    </Typography>
                    <TextField
                        value={productQty}
                        onChange={handleQtyChange}
                        type='number'
                    />
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary"
                            onClick={() => handleAddToCart(card.id)}>
                        Add to cart
                    </Button>
                    {cartProducts[card.id] !== undefined &&
                    <Button size="small" variant="outlined" color="primary"
                            onClick={() => handleRemoveFromCart(card.id)}>
                        Remove
                    </Button>}
                </CardActions>
            </Card>
        </Grid>
    )
};

const mapStateToProps = state => ({
    cartProducts: state.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (payload) => dispatch(rxAddProductToCart(payload)),
    removeProductFromCart: (payload) => dispatch(rxRemoveProductFromCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)