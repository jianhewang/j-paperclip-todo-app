// node common js modules
// browser ES modules
// import src from gulp
const {src, dest, series} = require('gulp')

// const static = function(cb) {
//     //task
//     // src().pipe(`plugin`).pipe(`compress`).pipe(dest())
//     // any folder, any type - src/static/*.*/*.*
//     src('src/static/data/*.*')
//         .pipe(dest('dist/data'))

//     // call the callback
//     cb()
// }

const static = function() {
    //task
    // src().pipe(`plugin`).pipe(`compress`).pipe(dest())
    // any folder, any type - src/static/*.*/*.*
    src('src/static/data/*.*')
        .pipe(dest('dist/data'))

    // call the callback
    
}

function redirect(){
    return (src('./_redirects').pipe(dest('./dist')))
}

exports.default = series(static, redirect)