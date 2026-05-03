export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isPast: boolean;
  gallery: string[];
  longDescription?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Frühlingsmarkt",
    date: "15. April 2026",
    time: "10:00 - 18:00 Uhr",
    location: "Dorfplatz Büttel",
    description:
      "Unser traditioneller Frühlingsmarkt mit regionalen Produkten, Kunsthandwerk und Live-Musik. Ein Fest für die ganze Familie!",
    longDescription:
      "Der jährliche Frühlingsmarkt ist eine beliebte Tradition in Büttel. Regionale Händler bieten frische Produkte, hausgemachte Spezialitäten und kunsthandwerkliche Arbeiten an. Für die musikalische Unterhaltung sorgt die Dorfkapelle. Kinder können sich auf eine Hüpfburg, Kinderschminken und viele weitere Attraktionen freuen. Bei Kaffee und Kuchen laden gemütliche Sitzgelegenheiten zum Verweilen ein.",
    image:
      "https://images.unsplash.com/photo-1771340591381-e72f1b148b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQzMjAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isPast: false,
    gallery: [
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800",
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
      "https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?w=800",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    ],
  },
  {
    id: 2,
    title: "Mitgliederversammlung",
    date: "22. April 2026",
    time: "19:00 Uhr",
    location: "Gemeindehaus Büttel",
    description:
      "Jahreshauptversammlung des Bürgervereins mit Berichten des Vorstands und Ausblick auf das kommende Jahr.",
    longDescription:
      "Alle Mitglieder sind herzlich zur Jahreshauptversammlung eingeladen. Auf der Tagesordnung stehen der Bericht des Vorstands über das vergangene Jahr, der Kassenbericht sowie die Vorstellung der Pläne für 2026. Im Anschluss an den offiziellen Teil gibt es Gelegenheit für Diskussionen und Austausch bei einem kleinen Imbiss.",
    image:
      "https://images.unsplash.com/photo-1713284674622-3f13fd162c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY2h1cmNoJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NDM2NjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isPast: false,
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    ],
  },
  {
    id: 3,
    title: "Sommerfest",
    date: "28. Juni 2026",
    time: "14:00 - 22:00 Uhr",
    location: "Festwiese am Sportplatz",
    description:
      "Das große Sommerfest mit Spielen, Grillen, Musik und Tanz. Der Höhepunkt des Jahres für alle Bütteler!",
    longDescription:
      "Unser legendäres Sommerfest ist das Highlight des Jahres! Den ganzen Nachmittag und Abend erwarten Sie Grillspezialitäten, kühle Getränke und Live-Musik von lokalen Bands. Für Kinder gibt es ein buntes Programm mit Spielen, einer Tombola und vielen Überraschungen. Bei Einbruch der Dämmerung beginnt die Tanzparty, die traditionell bis in die späten Abendstunden geht. Ein unvergesslicher Tag für die ganze Familie!",
    image:
      "https://images.unsplash.com/photo-1771340591381-e72f1b148b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzQzMjAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isPast: false,
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1530024866515-5421ce3c4b07?w=800",
      "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    ],
  },
];

export const pastEvents: Event[] = [
  {
    id: 4,
    title: "Weihnachtsmarkt 2025",
    date: "14. Dezember 2025",
    time: "15:00 - 21:00 Uhr",
    location: "Dorfplatz Büttel",
    description:
      "Stimmungsvoller Weihnachtsmarkt mit Glühwein, gebrannten Mandeln und weihnachtlicher Musik. Ein voller Erfolg mit über 300 Besuchern!",
    longDescription:
      "Der Weihnachtsmarkt 2025 war ein voller Erfolg! Bei winterlicher Atmosphäre lockte der Duft von Glühwein, gebrannten Mandeln und frischen Waffeln über 300 Besucher auf den festlich geschmückten Dorfplatz. Zahlreiche Stände boten handgemachte Geschenke und lokale Köstlichkeiten an. Die Kinder konnten den Weihnachtsmann besuchen, und der Posaunenchor sorgte für stimmungsvolle musikalische Begleitung. Ein herzliches Dankeschön an alle Helfer und Besucher!",
    image:
      "https://images.unsplash.com/photo-1764015658454-45de2ce59f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjB2aWxsYWdlJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzc0MzY2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isPast: true,
    gallery: [
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800",
      "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800",
      "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800",
      "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800",
      "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=800",
    ],
  },
  {
    id: 5,
    title: "Herbstwanderung 2025",
    date: "3. Oktober 2025",
    time: "11:00 Uhr",
    location: "Treffpunkt Gemeindehaus",
    description:
      "Traditionelle Herbstwanderung durch die herbstliche Landschaft rund um Büttel mit anschließendem gemütlichen Beisammensein.",
    longDescription:
      "Bei herrlichem Herbstwetter führte die diesjährige Wanderung durch die farbenprächtige Landschaft rund um Büttel. Über 40 Teilnehmer genossen die 12 Kilometer lange Strecke, die durch Wälder, Felder und entlang des Bachs führte. Unterwegs gab es eine Rast mit mitgebrachten Snacks. Zurück am Gemeindehaus wartete ein deftiger Eintopf und gemütliches Beisammensein auf alle Wanderer.",
    image:
      "https://images.unsplash.com/photo-1764015658454-45de2ce59f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjB2aWxsYWdlJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzc0MzY2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isPast: true,
    gallery: [
      "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
      "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=800",
    ],
  },
];

export function getAllEvents(): Event[] {
  return [...upcomingEvents, ...pastEvents];
}

export function getEventById(id: number): Event | undefined {
  return getAllEvents().find(event => event.id === id);
}

