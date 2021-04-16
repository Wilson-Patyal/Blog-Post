
const useStyles = theme => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    home: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'Center',
        alignContent: 'center',
    },
    NavLink: {
        fontSize: "20px",
        textDecoration: "none",
        color: 'black',
        '&:hover': {
            color: "white"
        },
        '&:active': {
            textDecoration: "underline"
        }


    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'grey'
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'Center',
        alignContent: 'center',

        marginRight: theme.spacing(2),
        marginTop: '20px',
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    rootFather: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    root: {
        marginTop: "100px",
        alignContent: "center",
        width: "50%",

    },
    media: {
        height: 140,
    },
    fullButton: {
        textDecoration: "none",
        color: "black",
        '&:hover': {
            color: "grey"
        }
    }

})

export default useStyles;