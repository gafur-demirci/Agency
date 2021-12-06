exports.getIndexPage = async (req, res) => {
    res.status(200).render('index');
}

exports.getServicesPage = async (req, res) => {
    res.status(200).render('services');
}

exports.getAboutPage = async (req, res) => {
    res.status(200).render('about');
}

exports.getContactPage = async (req, res) => {
    res.status(200).render('contact');
}