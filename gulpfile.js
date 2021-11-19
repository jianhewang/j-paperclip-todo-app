// node common js modules
// browser ES modules
// import src from gulp
const {src, dest, series} = require('gulp')

const static = function(){
   return( src('src/static/**')
    .pipe(dest('dist/static')))

}

function redirect(){
    return (src('./_redirects').pipe(dest('./dist')))
}

 
exports.default = series(static, redirect)