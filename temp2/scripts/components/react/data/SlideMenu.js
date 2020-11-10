/* Insert options for slide menu here.
 * For nested options, use an options key.
 */

const SlideMenu = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Photos', path: '/photos',
        options: [
            { name: 'Dog Photos', path: '/dog-photos' },
            { name: 'Cat Photos', path: '/cat-photos' },
            { name: 'Human Photos', path: '/human-photos' }
        ]
    }
];
export default SlideMenu;
