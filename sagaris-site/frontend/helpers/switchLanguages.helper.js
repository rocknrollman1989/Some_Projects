import fetch from "isomorphic-unfetch"
import { apiHost } from '../lib/appconf'
import { projects, services, translation, reviews, contacts, about, forsalesforce } from '../redux/pagesActions/_app.fetch.actions'

export const switcher = async (lng, dispatch) => {
    await fetch(`${apiHost}/${lng || 'en'}/wp-json/wp/v2/services?_embed`)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch(services(json))
        });

    await fetch(`${apiHost}/${lng || 'en'}/wp-json/wp/v2/projects?_embed`)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch(projects(json))
        });    

    await fetch(`${apiHost}/${lng || 'en'}/wp-json/wp/v2/translate?_embed`)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch(translation(json))
        });

    await fetch(`${apiHost}/${lng || 'en'}/wp-json/wp/v2/contacts?_embed`)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch(contacts(json))
        });

    await fetch(`${apiHost}/${lng || 'en'}/wp-json/wp/v2/who_we_are?_embed`)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch(about(json))
        });

    await fetch(`${apiHost}/${lng || 'en'}/wp-json/wp/v2/reviews?_embed`)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch(reviews(json))
        });

    await fetch(`${apiHost}/${lng || 'en'}/wp-json/wp/v2/forsalesforce?_embed`)
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch(forsalesforce(json))
        });
}
