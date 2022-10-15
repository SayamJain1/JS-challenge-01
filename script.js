const box = document.querySelector('.box');

box.addEventListener('mousemove', function (details) {
    // details is giveing me dimen of x and y side but its from window's '0' point i want from box
    
    var dimensions = this.getBoundingClientRect();

    // console.log(details.clientX - dimensions.x)
    // console.log(dimensions.width/2 )
    // console.log(details.clientX )

    if (details.clientX - dimensions.x < dimensions.width/2) {
        console.log('left')
        let redClr = convertToRange(details.clientX - dimensions.x , [0, dimensions.width/2], [ 255, 0])
        this.style.backgroundColor=`rgb(${redClr},0,0)`
    } else {
        console.log('right')
        let greenClr = convertToRange(details.clientX - dimensions.x , [dimensions.width/2, dimensions.width], [ 0, 255])
        this.style.backgroundColor=`rgb(0,${greenClr},0)`
        
    }

})

box.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'white'
 })


function convertToRange(value, srcRange, dstRange){
    // value is outside source range return
    if (value < srcRange[0] || value > srcRange[1]){
        return NaN; 
    }
    
    var srcMax = srcRange[1] - srcRange[0],
    dstMax = dstRange[1] - dstRange[0],
    adjValue = value - srcRange[0];
  
    return (adjValue * dstMax / srcMax) + dstRange[0];
  
}


