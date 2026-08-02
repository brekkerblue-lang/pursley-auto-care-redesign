export const business = {
  name: 'Pursley Auto Care LLC',
  shortName: 'Pursley',
  addressLine1: '18271 WA-3',
  addressLine2: 'Allyn, WA 98524',
  addressFull: '18271 WA-3, Allyn, WA 98524',
  phone: '(360) 275-0405',
  phoneHref: 'tel:+13602750405',
  // Sourced via NAPA AutoCare Center directory (facilityId=1378404), which
  // lists this exact phone number and address. The email carries the shop's
  // former name ("Ayers Automotive") because this business rebranded to
  // Pursley Auto Care LLC in 2024 (dated directly on the shop's own real
  // logo) while keeping the same address, phone number, and -- evidently --
  // the same longstanding contact inbox. See README for the full
  // cross-verification (this project's Gilmore's Automotive entry taught
  // us not to trust a NAPA email blind, so this one was specifically
  // traced back to its source before use).
  email: 'serviceayersautomotive@gmail.com',
  emailHref: 'mailto:serviceayersautomotive@gmail.com',
  rating: 4.7,
  reviewCount: 70,
  mapsHref:
    'https://www.google.com/maps/place/Pursley+Auto+Care+LLC/@47.3805201,-122.8309692,17z',
  hours: [
    { day: 'Monday', time: '10:00 AM – 5:00 PM' },
    { day: 'Tuesday', time: '9:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: '9:00 AM – 5:00 PM' },
    { day: 'Thursday', time: '9:00 AM – 5:00 PM' },
    { day: 'Friday', time: '9:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
}
