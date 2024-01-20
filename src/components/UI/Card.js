const Card = props=>{
    const classes=`${props.className} text-center p-16 m-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700`
    return(
        <div className={classes}>
        {props.children}
        </div>
    )
}
export default Card;