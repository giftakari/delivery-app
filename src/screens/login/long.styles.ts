import { StyleSheet } from "react-native"


export const loginStyle = StyleSheet.create({
    content:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"rgb(100,37, 131)"
    },
    view:{
        width:'80%',
   
    },
    cartTitle:{
        color:"rgb(100,37, 131)",
        fontWeight:"bold",
        "letterSpacing": 0.1,
        "lineHeight": 20,
    },
    cardButton:{
        margin:4,
        marginLeft:0,
        marginRight:0
    }
   
})