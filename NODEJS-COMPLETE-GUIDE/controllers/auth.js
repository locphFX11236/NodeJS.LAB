exports.getLogin = (req, res, next) => {
    // console.log(req.get('Cookie'));
    // const isLoggedIn = req
    //     .get('Cookie')
    //     // .split(';')[0] // Neu Cookie co nhieu tham so danh chi muc split[n] de lay gia tri "loggedIn=true"
    //     .trim() // Loai bo khoang trong du thua
    //     .split('=')[1] // Chi chon text co gia tri la 'true'
    //     === 'true'
    // ;
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true;
    res.redirect('/');
};