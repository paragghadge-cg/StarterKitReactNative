const mockDispatch = jest.fn((action) => action);
module.exports = {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
        mapStateToProps,
        mapDispatchToProps: (dispatch = mockDispatch, ownProps) =>
            mapDispatchToProps(dispatch, ownProps),
        ReactComponent,
        mockDispatch
    }),
    Provider: ({ children }) => children
};
