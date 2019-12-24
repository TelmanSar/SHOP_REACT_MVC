

const controllerMiddleware = configs => state => next => action => {
    if(configs[action.type]) {
        try {
            return  configs[action.type](state, action);
        } catch (error) {
            console.log(error)
        }
    } else {
        return next(action);
    }
};

export default controllerMiddleware;