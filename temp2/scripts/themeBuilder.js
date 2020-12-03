import { colorPalette, themes } from './themes';

let gdsThemes = themes;
let finalThemes = [];
const primeSlots = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'warning', 'danger', 'info'];
//const graySlots = ['gray', 'dark1', 'dark2', 'dark3', 'dark4', 'dark5', 'light1', 'light2', 'light3', 'light4', 'light5'];
const graySlots = ['grayDark1', 'grayDark2', 'grayDark3', 'grayDark4', 'grayDark5', 'grayLight1', 'grayLight2', 'grayLight3', 'grayLight4', 'grayLight5'];
const agnosticSlots = ['blue', 'gold', 'green', 'orange', 'purple', 'red', 'gray', 'darkBlue', 'darkGold', 'darkGreen', 'darkRed', 'magenta', 'gray'];

const shadeLevels = 5;

const categoryDescriptions = {
    palette: 'This is Design System\'s complete color palette - all built-in themes are constructed from these colors',
    primeSlots: 'These are the main color assignments for this theme. All component color assignments within this theme are based on this subset of the overall palette. Editing these will have far-reaching effects.',
    componentSlots: 'These color assignments affect specific components and allow for fine grain control over the look of your theme. Edit these to change colors of individual components within the design system.'
};


const amountDictionary = {
    5: 1,
    10: 2,
    15: 3,
    30: 4,
    50: 5
};

// Utility to make light and dark variations of colors from colorPalette
const makeColorVariation = (color, direction, amount) => { // '#00a7cf', [light | dark], [1, 2, 3, 4]
    let directionValue = direction === 'light' ? 'white' : 'black',
        amountValue,
        stringOutput;

    switch (amount) {
        case 1:
            amountValue = 5;
            break;
        case 2:
            amountValue = 10;
            break;
        case 3:
            amountValue = 15;
            break;
        case 4:
            amountValue = 30;
            break;
        case 5:
            amountValue = 50;
            break;
        default:
            break;
    }

    stringOutput = `mix(${directionValue},$${color}Color,${amountValue}%)`;
    return stringOutput;
};

const toNormalString = (string) => {
    return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const createVariations = (slot, colorValue) => {
    let i;
    let temp = {};
    ///Create shade variations
    for (i = 1; i < shadeLevels + 1; i++) {
        temp[`${colorValue}Dark${i}`] = makeColorVariation(colorValue, 'dark', i);
        temp[`${colorValue}Light${i}`] = makeColorVariation(colorValue, 'light', i);
    }
    ///Use sort to group them together in light/dark shades
    Object.keys(temp).sort().forEach(function (key) {
        slot[key] = temp[key];
    });
};

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

const getMixProps = (string) => {
    let str = string.replace('mix(', '').replace(')', '');
    let array = str.split(',');

    return array;
};

//Loop through individual themes
Object.keys(gdsThemes).map(theme => {
    // Reverse the property order so we can start with configuring componentSlotsand work up to palette (most-specific -> least specific)
    const categories = Object.keys(gdsThemes[theme]);
    // Create ordered schema for final theme object
    finalThemes[theme] = {
        'palette': {},
        'primeSlots': {},
        'componentSlots': {}
    };
    //Loop through categories: palette / primeSlots / componentSlots
    categories.map(category => {
        finalThemes[theme][category] = {};
        let themeBaseShades = Object.keys(gdsThemes[theme][category]);
        //First Map: Set base colors:
        themeBaseShades.map(color => {
            const paletteDictionary = finalThemes[theme].palette;
            const primeDictionary = finalThemes[theme].primeSlots;
            switch (category) {
                case 'palette':
                    finalThemes[theme][category][color] = gdsThemes[theme][category][color];
                    //createVariations(finalThemes[theme][category], color);
                    break;
                case 'primeSlots': {
                    ///IF VALUE EXISTS IN THIS VALUE DICTIONARY, SET THE VALUE OF THE PRIME SLOT TO EQUAL THE KEY WITH THIS EQUIVALENT VALUE IN THE PALETTE;
                    const paletteKey = getKeyByValue(paletteDictionary, gdsThemes[theme][category][color]);
                    if (typeof paletteKey != 'undefined') {
                        ///if it exists in the palette, use the palette variable as a reference;
                        finalThemes[theme][category][color] = `$${paletteKey}Color`;
                    } else {
                        ///otherwise use the value in the document;
                        finalThemes[theme][category][color] = gdsThemes[theme][category][color];
                    }
                    break;
                }
                case 'componentSlots': {
                    //get key of palette  that component slot is using
                    const paletteKey = getKeyByValue(paletteDictionary, gdsThemes[theme][category][color]);
                    // then check if that palette value is used in the prime slots
                    const primeKey = getKeyByValue(primeDictionary, `$${paletteKey}Color`);
                    // finally, check if we're dealing with a mixed color
                    const isMix = gdsThemes[theme][category][color].includes('mix');
                    //first it will associate unshaded color values to the primeslots
                    if (typeof primeKey != 'undefined') {
                        finalThemes[theme][category][color] = `$${primeKey}Color`;
                    } else if (isMix) {
                        //Then it needs to associate component slots with shaded colors to either the primeSlots or the palette slots
                        ///break the mix into its parts
                        const mixProps = getMixProps(gdsThemes[theme][category][color]);
                        //isolate the base color
                        const baseColor = mixProps[1];
                        const direction = mixProps[0] === 'black' ? 'Dark' : 'Light';
                        const amount = amountDictionary[+mixProps[2].replace('%', '')];
                        //check if that base color exists in the primeSlots
                        const primeMixKey = getKeyByValue(primeDictionary, baseColor);
                        //check if that shade exists in the palette
                        const paletteMixKey = getKeyByValue(paletteDictionary, gdsThemes[theme][category][color]);
                        if (typeof primeMixKey != 'undefined') {
                            //first try to associate shades with a prime slot
                            finalThemes[theme][category][color] = `$${primeMixKey}${direction}${amount}Color`;
                        } else if (typeof paletteMixKey != 'undefined') {
                            //then try to associate shades with a palette slot
                            finalThemes[theme][category][color] = `$${paletteMixKey}Color`;
                        } else {
                            // this shouldn't ever fire - but use a raw hex if it doesn't match any of those other colors
                            finalThemes[theme][category][color] = gdsThemes[theme][category][color];
                        }
                    } else if (typeof paletteKey != 'undefined') {
                        // Associate any component colors that don't exist in primeSlots with the palette variables if they exist
                        finalThemes[theme][category][color] = `$${paletteKey}Color`;
                    } else {
                        ///otherwise use the original value in the themes.js object;
                        finalThemes[theme][category][color] = gdsThemes[theme][category][color];
                    }
                    break;
                }

            }
        });
        //Second Map: Set shades:
        themeBaseShades.map(color => {
            switch (category) {
                case 'palette':
                    ///I'll refactor this another time
                    finalThemes[theme].palette.grayDark1 = colorPalette.ggDark1.baseHex;
                    finalThemes[theme].palette.grayDark2 = colorPalette.ggDark2.baseHex;
                    finalThemes[theme].palette.grayDark3 = colorPalette.ggDark3.baseHex;
                    finalThemes[theme].palette.grayDark4 = colorPalette.ggDark4.baseHex;
                    finalThemes[theme].palette.grayDark5 = colorPalette.ggDark5.baseHex;

                    finalThemes[theme].palette.grayLight1 = colorPalette.ggLight1.baseHex;
                    finalThemes[theme].palette.grayLight2 = colorPalette.ggLight2.baseHex;
                    finalThemes[theme].palette.grayLight3 = colorPalette.ggLight3.baseHex;
                    finalThemes[theme].palette.grayLight4 = colorPalette.ggLight4.baseHex;
                    finalThemes[theme].palette.grayLight5 = colorPalette.ggLight5.baseHex;
                    createVariations(finalThemes[theme][category], color);
                    break;

                case 'primeSlots':
                    createVariations(finalThemes[theme][category], color);
                    break;

            }
        });
    });
});

// Assemble .scss for each theme
Object.keys(finalThemes).map(theme => {
    finalThemes[theme].scss = '\n';
    Object.keys(finalThemes[theme]).forEach(category => {
        if (category !== 'scss') {
            finalThemes[theme].scss += `//[-------${toNormalString(category).toUpperCase()}-------]//\n`;
            finalThemes[theme].scss += `/* ${categoryDescriptions[category]} */\n`;
            finalThemes[theme].scss += `//[---------------------]//\n`;
            Object.keys(finalThemes[theme][category]).forEach(key => {
                if (key !== 'scss') {
                    finalThemes[theme].scss += `$${key}Color: ${finalThemes[theme][category][key]} !default;\n`;
                }
            });
            finalThemes[theme].scss += '\n\n\n';
        }
    });
});

export default finalThemes;

