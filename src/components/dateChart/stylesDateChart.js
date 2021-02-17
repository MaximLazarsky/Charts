import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    titleDuaration: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: "15px",
    },
    performance: {
        fontSize: "16px",
        fontWeight: 500,
        color: "#323a44"
    },
    selectDuration: {
        borderRadius: "6px",
        background: "#fff",
        fontSize: "12px",
        padding: "2px 14px 1px 12px",
        color: "#323a44",
        "&&&:before": {
            display: "none"
        }
    },
    firstGraphTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 16px 16px 20px",
        width: "100%",
        borderBottom: "1px solid #ecf2ff",
        boxSizing: "border-box"
    },
    firstGraphTitleLeft: {
        display: "flex",
        alignItems: "center",
    },
    firstGraphTitleText: {
        fontSize: "18px",
        marginRight: "15px",
        color: "#323a44"
    },
    firstGraphTitleLeftIcon: {
        background: "#f2f2f2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        color: "#323a44"
    },
    firstGraphTitleRightIcon: {
        width: "30px",
        height: "30px",
        background: "#ececec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
        color: "#323a44"
    },
    graphSection: {
        display: "flex",
        marginTop: "30px",
        padding: "0 40px 40px 25px"
    },
    graphSectionNumber: {
        fontSize: "70px",
        fontWeight: "500",
        fontFamily: "Rubik",
        color: "#323a44"
    },
    graphSectionSingUps: {
        fontSize: "18px",
        fontWeight: "500",
        fontFamily: "Rubik",
        marginTop: "10px",
        color: "#323a44"
    },
    graphSectionDescription: {
        display: "flex",
        marginTop: "10px",
        width: "320px"
    },
    iconSection: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#d9ffd6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#55ad4c"
    },
    graphSectionDescriptionText: {
        color: "#60717a",
        fontSize: "14px",
        fontFamily: "Rubik",
        marginLeft: "15px"
    }
})