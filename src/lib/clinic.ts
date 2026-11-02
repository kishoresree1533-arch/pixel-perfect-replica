/**
 * Verified G7 Clinic business facts — single source of truth.
 * Do not add information here that the clinic has not confirmed.
 */
export const CLINIC = {
  name: "G7 Clinic",
  addressLines: [
    "Sri Krishna Building, 11/2, Tank Street",
    "Sunnambu Kalavai, Saravanampatti",
    "Coimbatore – 641049, Tamil Nadu",
  ],
  addressShort: "Saravanampatti, Coimbatore",
  phoneDisplay: "94874 13417",
  phoneDial: "+919487413417",
  whatsapp: "919487413417",
  email: "g7nexhealth2025@gmail.com",
  rating: "4.8",
  reviewCount: 125,
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=G7+Clinic+Sri+Krishna+Building+Tank+Street+Sunnambu+Kalavai+Saravanampatti+Coimbatore+641049",
  mapsReviews:
    "https://www.google.com/maps/search/?api=1&query=G7+Clinic+Saravanampatti+Coimbatore",
  mapsEmbed:
    "https://www.google.com/maps?q=11.083459,76.981835&z=16&output=embed",
  sessions: [
    { label: "Morning", time: "9:30 AM – 1:30 PM" },
    { label: "Evening", time: "5:00 PM – 9:00 PM" },
  ],
  openDays: "Monday – Sunday",
  whatsappLink: (message: string) =>
    `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`,
} as const;
