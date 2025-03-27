const headerBackgroundColor = '#280944';
const tabBackgroundColor = '#220C3A';
const accentColor = '#F54084';
const tabTextColor = '#918DAC';

export const Color = {
    headerBackgroundColor,
    tabBackgroundColor,
    accentColor,
    tabTextColor
} as const

export const Settings = {
    Customer: 'Online Customer',
    UserAgreement: 'User Agreement',
    PrivacyPolicy: 'Privacy Policy',
    AboutUs: 'About Us',
} as const

export const Category = {
    Work: 'Work and Study',
    Life: 'Life',
    Health: 'Health and Wellness',
} as const