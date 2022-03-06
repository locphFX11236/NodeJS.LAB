exports.getLogin = (req, res, next) => {
    // console.log(req.get('Cookie'));
    const isLoggedIn = req
        .get('Cookie')
        // .split(';')[0] // Neu Cookie co nhieu tham so danh chi muc split[n] de lay gia tri "loggedIn=true"
        .trim() // Loai bo khoang trong du thua
        .split('=')[1] // Chi chon text co gia tri la 'true'
        === 'true'
    ;
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true');
    res.redirect('/');
};