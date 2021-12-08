exports.getIndexPage = (req, res) => {
    res.status(200).render('index');
}

exports.getAboutPage = (req, res) => {
    res.status(200).render('about');
}

exports.getContactPage = (req, res) => {
    res.status(200).render('contact');
}

exports.getAdminPage = (req, res) => {
    res.status(200).render('admin');
}