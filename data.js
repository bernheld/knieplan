// ============================================================
// TRAININGSPLAN DATEN - Bernhard Held
// Knie Reha | Start: 09.10.2026 (Freitag) | Ziel: 15.12.2026
// ============================================================

const PLAN_DATA = {
  meta: {
    name: "Bernhard Held",
    startDate: "2026-10-09",
    goalDate: "2026-12-15",
    goal: "Steilwand Telemarken ab 42° - Wiedersberger Horn",
    knie: "Arthrose Grad III | Meniskus außen rechts"
  },

  phases: [
    { id: 1, name: "Phase 1 - Fundament",      color: "#4472C4", weeks: "1-3", dates: "09.10. - 28.10." },
    { id: 2, name: "Phase 2 - Aufbau",          color: "#375623", weeks: "4-6", dates: "29.10. - 18.11." },
    { id: 3, name: "Phase 3 - Skivorbereitung", color: "#C55A11", weeks: "7-9", dates: "19.11. - 09.12." },
    { id: 4, name: "Phase 4 - Feintuning",      color: "#7030A0", weeks: "10",  dates: "10.12. - 14.12." }
  ],

  weekTemplate: [
    { day: "Montag",     type: "kraft",    icon: "💪", isFriday: false },
    { day: "Dienstag",   type: "ausdauer", icon: "🚴", isFriday: false },
    { day: "Mittwoch",   type: "kraft",    icon: "💪", isFriday: false },
    { day: "Donnerstag", type: "ausdauer", icon: "🏊", isFriday: false },
    { day: "Freitag",    type: "fix",      icon: "🟠", isFriday: true  },
    { day: "Samstag",    type: "kraft",    icon: "💪", isFriday: false },
    { day: "Sonntag",    type: "pause",    icon: "😴", isFriday: false }
  ],

  days: [
    // ===== WOCHE 1 | Phase 1 | Start: Fr 09.10.2026 =====
    { date: "2026-10-09", week: 1, phase: 1, day: "Freitag", type: "fix",
      title: "🟠 FIX: Rudern + Les Mills Core",
      isFix: true,
      exercises: [
        { name: "Rudern",                    sets: 1, reps: "30 Min",  equip: "Rudergerät", note: "Puls 130-140 — ERSTER TAG!" },
        { name: "Les Mills Core",            sets: 1, reps: "30 Min",  equip: "Kurs",       note: "FIX - nicht ändern!" },
        { name: "Stretching Knie + Hüfte",   sets: 1, reps: "10 Min",  equip: "Kein",       note: "Besonders Hintere Kette" }
      ]
    },
    { date: "2026-10-10", week: 1, phase: 1, day: "Samstag", type: "kraft",
      title: "Kraft - Fundament",
      exercises: [
        { name: "Tägliche Mobility-Routine",  sets: 1, reps: "10 Min",    equip: "Kein",        note: "Morgens!" },
        { name: "Minisquats (0-40°)",         sets: 3, reps: "15",         equip: "Stange 3kg",  note: "Kein Schmerz!" },
        { name: "Glute Bridge beiderseitig",  sets: 3, reps: "20",         equip: "Kein",        note: "Schlüsselübung!" },
        { name: "Terminal Knee Extension",    sets: 3, reps: "15/Seite",   equip: "Band",        note: "Meniskus-spezifisch" },
        { name: "Wallball Hold + Wall Sit",   sets: 3, reps: "30 Sek.",    equip: "6kg Wallball",note: "Ball vor Brust halten" },
        { name: "Einbeinstand (Augen zu)",    sets: 3, reps: "45 Sek.",    equip: "Kein",        note: "Propriozeption" },
        { name: "Stretching Komplett",        sets: 1, reps: "15 Min",     equip: "Kein",        note: "" }
      ]
    },
    { date: "2026-10-11", week: 1, phase: 1, day: "Sonntag", type: "pause",
      title: "Aktive Erholung",
      exercises: [
        { name: "Spaziergang flach + sanft Dehnen", sets: 1, reps: "20-30 Min", equip: "Kein", note: "Knie kühlen wenn nötig" }
      ]
    },
    // ===== WOCHE 2 | Phase 1 =====
    { date: "2026-10-12", week: 2, phase: 1, day: "Montag", type: "kraft",
      title: "Kraft - Fundament",
      exercises: [
        { name: "Tägliche Mobility-Routine",       sets: 1, reps: "10 Min",     equip: "Kein",          note: "Morgens!" },
        { name: "Minisquats (0-40°)",              sets: 3, reps: "15",          equip: "Stange 3kg",    note: "Kein Schmerz!" },
        { name: "Glute Bridge beiderseitig",       sets: 3, reps: "20",          equip: "Kein",          note: "Schlüsselübung!" },
        { name: "Terminal Knee Extension",         sets: 3, reps: "15/Seite",    equip: "Band",          note: "Meniskus-spezifisch" },
        { name: "Lateral Band Walk",               sets: 3, reps: "15 Schritte", equip: "Band",          note: "Außenstabilität" },
        { name: "Einbeinstand (Augen zu)",         sets: 3, reps: "45 Sek.",     equip: "Kein",          note: "Propriozeption" },
        { name: "Stretching Komplett",             sets: 1, reps: "10 Min",      equip: "Kein",          note: "Nach Training" }
      ]
    },
    { date: "2026-10-13", week: 2, phase: 1, day: "Dienstag", type: "ausdauer",
      title: "Ausdauer - Rad",
      exercises: [
        { name: "Tägliche Mobility-Routine", sets: 1, reps: "10 Min", equip: "Kein",    note: "Morgens!" },
        { name: "Radfahren flach",           sets: 1, reps: "35 Min", equip: "Fahrrad", note: "Puls 120-130" },
        { name: "Kurz-Dehnen",              sets: 1, reps: "5 Min",  equip: "Kein",    note: "" }
      ]
    },
    { date: "2026-10-14", week: 2, phase: 1, day: "Mittwoch", type: "kraft",
      title: "Kraft - Fundament",
      exercises: [
        { name: "Tägliche Mobility-Routine",      sets: 1, reps: "10 Min",     equip: "Kein",          note: "Morgens!" },
        { name: "Goblet Squat (0-60°)",           sets: 3, reps: "12",          equip: "12kg Sandsack", note: "Winkel noch niedrig" },
        { name: "Romanian Deadlift",              sets: 3, reps: "12",          equip: "Stange 8kg",    note: "Hintere Kette" },
        { name: "Einbeinige Glute Bridge",        sets: 3, reps: "12/Seite",    equip: "Kein",          note: "Progression" },
        { name: "Lateral Band Walk",              sets: 3, reps: "15 Schritte", equip: "Band",          note: "" },
        { name: "Hüftabduktion seitlich liegend", sets: 3, reps: "15/Seite",   equip: "Band",          note: "Außenmeniskus" },
        { name: "Stretching Komplett",            sets: 1, reps: "10 Min",      equip: "Kein",          note: "" }
      ]
    },
    { date: "2026-10-15", week: 2, phase: 1, day: "Donnerstag", type: "ausdauer",
      title: "Ausdauer - Schwimmen",
      exercises: [
        { name: "Tägliche Mobility-Routine",  sets: 1, reps: "10 Min", equip: "Kein", note: "Morgens!" },
        { name: "Schwimmen (Kraul/Rücken)",   sets: 1, reps: "30 Min", equip: "Kein", note: "KEIN Brustschwimmen!" },
        { name: "Kurz-Dehnen",               sets: 1, reps: "5 Min",  equip: "Kein", note: "" }
      ]
    },
    { date: "2026-10-16", week: 2, phase: 1, day: "Freitag", type: "fix",
      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true,
      exercises: [
        { name: "Rudern",                  sets: 1, reps: "30 Min", equip: "Rudergerät", note: "Puls 130-140" },
        { name: "Les Mills Core",          sets: 1, reps: "30 Min", equip: "Kurs",       note: "FIX!" },
        { name: "Stretching Knie + Hüfte", sets: 1, reps: "10 Min", equip: "Kein",       note: "" }
      ]
    },
    { date: "2026-10-17", week: 2, phase: 1, day: "Samstag", type: "kraft",    title: "Kraft - Fundament",  exercises: [{ name: "Wie Woche 2 Montag - gleiche Übungen", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-10-18", week: 2, phase: 1, day: "Sonntag", type: "pause",    title: "Aktive Erholung",    exercises: [{ name: "Spaziergang + Dehnen", sets: 1, reps: "20-30 Min", equip: "Kein", note: "" }] },
    // ===== WOCHE 3 | Phase 1 =====
    { date: "2026-10-19", week: 3, phase: 1, day: "Montag",     type: "kraft",    title: "Kraft - Fundament (letzte Woche P1)", exercises: [{ name: "Wie Woche 2 Montag - Wiederholung + leichte Steigerung", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-10-20", week: 3, phase: 1, day: "Dienstag",   type: "ausdauer", title: "Rad 35 Min",         exercises: [{ name: "Radfahren flach", sets: 1, reps: "35 Min", equip: "Fahrrad", note: "Puls 120-130" }] },
    { date: "2026-10-21", week: 3, phase: 1, day: "Mittwoch",   type: "kraft",    title: "Kraft - Fundament",  exercises: [{ name: "Wie Woche 2 Mittwoch", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-10-22", week: 3, phase: 1, day: "Donnerstag", type: "ausdauer", title: "Schwimmen 30 Min",   exercises: [{ name: "Schwimmen (Kraul/Rücken)", sets: 1, reps: "30 Min", equip: "Kein", note: "KEIN Brustschwimmen!" }] },
    { date: "2026-10-23", week: 3, phase: 1, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 30 Min + Les Mills Core", sets: 1, reps: "60 Min", equip: "Rudergerät + Kurs", note: "FIX!" }] },
    { date: "2026-10-24", week: 3, phase: 1, day: "Samstag",    type: "kraft",    title: "Kraft - Fundament",  exercises: [{ name: "Wie Woche 2 Samstag", sets: 0, reps: "", equip: "", note: "Letzte Woche Phase 1!" }] },
    { date: "2026-10-25", week: 3, phase: 1, day: "Sonntag",    type: "pause",    title: "Aktive Erholung",    exercises: [{ name: "Spaziergang + Dehnen", sets: 1, reps: "30 Min", equip: "Kein", note: "" }] },
    // ===== WOCHE 4 | Phase 2 =====
    { date: "2026-10-26", week: 4, phase: 2, day: "Montag", type: "kraft",
      title: "Kraft - Aufbau",
      exercises: [
        { name: "Tägliche Mobility-Routine",       sets: 1, reps: "10 Min",     equip: "Kein",           note: "" },
        { name: "Goblet Squat (0-70°)",            sets: 4, reps: "12",          equip: "12kg Sandsack",  note: "Winkel erhöhen!" },
        { name: "Bulgarian Split Squat (niedrig)", sets: 3, reps: "10/Seite",    equip: "5kg DB je Hand", note: "Telemark-spezifisch!" },
        { name: "Step-up (Treppenstufe ~20cm)",    sets: 3, reps: "12/Seite",    equip: "12kg Sandsack",  note: "Bergauf simulieren" },
        { name: "Step-down exzentrisch",           sets: 3, reps: "10/Seite",    equip: "Kein",           note: "Bergab-Training!" },
        { name: "Lateral Band Walk",               sets: 3, reps: "15 Schritte", equip: "Band",           note: "" },
        { name: "Stretching 15 Min",               sets: 1, reps: "15 Min",      equip: "Kein",           note: "" }
      ]
    },
    { date: "2026-10-27", week: 4, phase: 2, day: "Dienstag",   type: "ausdauer", title: "Rad 45 Min",         exercises: [{ name: "Radfahren leichte Hügel", sets: 1, reps: "45 Min", equip: "Fahrrad", note: "Puls 130-140" }] },
    { date: "2026-10-28", week: 4, phase: 2, day: "Mittwoch", type: "kraft",
      title: "Kraft - Aufbau",
      exercises: [
        { name: "Tägliche Mobility-Routine",  sets: 1, reps: "10 Min",     equip: "Kein",          note: "" },
        { name: "Romanian Deadlift",          sets: 3, reps: "12",          equip: "Stange 13kg",   note: "Hintere Kette" },
        { name: "Sandsack Swing (KB-Stil)",   sets: 3, reps: "12",          equip: "12kg Sandsack", note: "Hüftext. + Ausdauer" },
        { name: "Einbeinige Glute Bridge",    sets: 3, reps: "12/Seite",    equip: "Kein",          note: "" },
        { name: "Step-down exzentrisch",      sets: 3, reps: "10/Seite",    equip: "Kein",          note: "" },
        { name: "Hüftabduktion mit Band",     sets: 3, reps: "15/Seite",    equip: "Band",          note: "" },
        { name: "Stretching 15 Min",          sets: 1, reps: "15 Min",      equip: "Kein",          note: "" }
      ]
    },
    { date: "2026-10-29", week: 4, phase: 2, day: "Donnerstag", type: "ausdauer", title: "Schwimmen 40 Min",   exercises: [{ name: "Schwimmen (Kraul/Rücken)", sets: 1, reps: "40 Min", equip: "Kein", note: "Strecke steigern" }] },
    { date: "2026-10-30", week: 4, phase: 2, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 30 Min + Les Mills Core", sets: 1, reps: "60 Min", equip: "Rudergerät + Kurs", note: "FIX! Puls 135-145" }] },
    { date: "2026-10-31", week: 4, phase: 2, day: "Samstag", type: "kraft",
      title: "Kraft - Aufbau + Telemark-Einstieg",
      exercises: [
        { name: "Goblet Squat (0-70°)",                    sets: 4, reps: "12",       equip: "12kg Sandsack", note: "" },
        { name: "Wallball Squat-to-Press",                 sets: 3, reps: "10",        equip: "6kg Wallball",  note: "Ball werfen/drücken" },
        { name: "Telemark-Lunge (10 Sek. halten)",         sets: 3, reps: "8/Seite",   equip: "Kein",          note: "Erste Telemarkstellung!" },
        { name: "Einbeinstand auf instabilem Untergrund",  sets: 3, reps: "45 Sek.",   equip: "Kissen",        note: "Propriozeption+" },
        { name: "Stretching 15 Min",                       sets: 1, reps: "15 Min",    equip: "Kein",          note: "" }
      ]
    },
    { date: "2026-11-01", week: 4, phase: 2, day: "Sonntag",    type: "pause",    title: "Pause / Aktiv",      exercises: [{ name: "Spaziergang + Treppenstufen 5 Min", sets: 1, reps: "30 Min", equip: "Kein", note: "Bergab simulieren" }] },
    // ===== WOCHEN 5-6 | Phase 2 =====
    { date: "2026-11-02", week: 5, phase: 2, day: "Montag",     type: "kraft",    title: "Kraft - Aufbau",           exercises: [{ name: "Wie Woche 4 Montag - Gewicht/Wdh steigern", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-03", week: 5, phase: 2, day: "Dienstag",   type: "ausdauer", title: "Rad 45 Min",               exercises: [{ name: "Radfahren leichte Hügel", sets: 1, reps: "45 Min", equip: "Fahrrad", note: "Puls 130-140" }] },
    { date: "2026-11-04", week: 5, phase: 2, day: "Mittwoch",   type: "kraft",    title: "Kraft - Aufbau",           exercises: [{ name: "Wie Woche 4 Mittwoch - Steigerung", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-05", week: 5, phase: 2, day: "Donnerstag", type: "ausdauer", title: "Schwimmen 40 Min",         exercises: [{ name: "Schwimmen (Kraul/Rücken)", sets: 1, reps: "40 Min", equip: "Kein", note: "" }] },
    { date: "2026-11-06", week: 5, phase: 2, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 30 Min + Les Mills Core", sets: 1, reps: "60 Min", equip: "Rudergerät + Kurs", note: "FIX!" }] },
    { date: "2026-11-07", week: 5, phase: 2, day: "Samstag",    type: "kraft",    title: "Kraft + Telemark",         exercises: [{ name: "Wie Woche 4 Samstag - Telemark-Lunge länger halten", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-08", week: 5, phase: 2, day: "Sonntag",    type: "pause",    title: "Pause / Aktiv",            exercises: [{ name: "Spaziergang + Treppenstufen", sets: 1, reps: "30 Min", equip: "Kein", note: "" }] },
    { date: "2026-11-09", week: 6, phase: 2, day: "Montag",     type: "kraft",    title: "Kraft - Aufbau",           exercises: [{ name: "Wie Woche 4 Montag - Maximum Phase 2", sets: 0, reps: "", equip: "", note: "Letzte Woche Phase 2!" }] },
    { date: "2026-11-10", week: 6, phase: 2, day: "Dienstag",   type: "ausdauer", title: "Rad 45 Min",               exercises: [{ name: "Radfahren leichte Hügel", sets: 1, reps: "45 Min", equip: "Fahrrad", note: "" }] },
    { date: "2026-11-11", week: 6, phase: 2, day: "Mittwoch",   type: "kraft",    title: "Kraft - Aufbau",           exercises: [{ name: "Wie Woche 4 Mittwoch", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-12", week: 6, phase: 2, day: "Donnerstag", type: "ausdauer", title: "Schwimmen 40 Min",         exercises: [{ name: "Schwimmen (Kraul/Rücken)", sets: 1, reps: "40 Min", equip: "Kein", note: "" }] },
    { date: "2026-11-13", week: 6, phase: 2, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 30 Min + Les Mills Core", sets: 1, reps: "60 Min", equip: "Rudergerät + Kurs", note: "FIX!" }] },
    { date: "2026-11-14", week: 6, phase: 2, day: "Samstag",    type: "kraft",    title: "Kraft + Telemark",         exercises: [{ name: "Wie Woche 4 Samstag", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-15", week: 6, phase: 2, day: "Sonntag",    type: "pause",    title: "Pause / Aktiv",            exercises: [{ name: "Spaziergang + Treppenstufen", sets: 1, reps: "30 Min", equip: "Kein", note: "" }] },
    // ===== WOCHEN 7-9 | Phase 3 =====
    { date: "2026-11-16", week: 7, phase: 3, day: "Montag", type: "kraft",
      title: "Kraft - Skivorbereitung",
      exercises: [
        { name: "Dynamisches Aufwärmen",                sets: 1, reps: "12 Min",     equip: "Kein",           note: "" },
        { name: "Goblet Squat (bis 90°)",               sets: 4, reps: "10",          equip: "12kg Sandsack",  note: "Volle Tiefe!" },
        { name: "Telemark-Lunge statisch (20-30 Sek.)", sets: 4, reps: "8/Seite",     equip: "Kein",           note: "KERNMODUL!" },
        { name: "Step-down exzentrisch (höhere Stufe)", sets: 4, reps: "10/Seite",    equip: "Kein",           note: "Steilhang simulieren!" },
        { name: "Wall Sit (60° Kniewinkel)",            sets: 3, reps: "45 Sek.",     equip: "Kein",           note: "Statische Skiausdauer" },
        { name: "Seitliche Lunge",                      sets: 3, reps: "12/Seite",    equip: "5kg DB je Hand", note: "Kurvenfahrt" },
        { name: "Stretching 15 Min",                    sets: 1, reps: "15 Min",      equip: "Kein",           note: "" }
      ]
    },
    { date: "2026-11-17", week: 7, phase: 3, day: "Dienstag",   type: "ausdauer", title: "Rad Intervalle 50 Min",    exercises: [{ name: "Rad Intervalle (2 Min hart / 2 Min locker)", sets: 1, reps: "50 Min", equip: "Fahrrad", note: "Puls bis 155" }] },
    { date: "2026-11-18", week: 7, phase: 3, day: "Mittwoch", type: "kraft",
      title: "Kraft - Skivorbereitung",
      exercises: [
        { name: "Tägliche Mobility-Routine",                 sets: 1, reps: "10 Min",   equip: "Kein",          note: "" },
        { name: "Romanian Deadlift",                         sets: 4, reps: "10",         equip: "Stange 13kg",   note: "" },
        { name: "Einbein-Squat (assistiert, Stuhl daneben)", sets: 3, reps: "8/Seite",   equip: "Kein",          note: "Maximalkraft" },
        { name: "Sandsack Swing",                            sets: 4, reps: "12",         equip: "12kg Sandsack", note: "Kraft + Ausdauer" },
        { name: "Telemark-Lunge statisch",                   sets: 4, reps: "8/Seite",   equip: "Kein",          note: "" },
        { name: "Sprunggelenk-Plyometrie sanft",             sets: 3, reps: "10",         equip: "Kein",          note: "Nur wenn schmerzfrei!" },
        { name: "Stretching 15 Min",                         sets: 1, reps: "15 Min",    equip: "Kein",          note: "" }
      ]
    },
    { date: "2026-11-19", week: 7, phase: 3, day: "Donnerstag", type: "ausdauer", title: "Schwimmen 45 Min",         exercises: [{ name: "Schwimmen (Kraul, längere Einheit)", sets: 1, reps: "45 Min", equip: "Kein", note: "Ausdauerbasis" }] },
    { date: "2026-11-20", week: 7, phase: 3, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 30 Min + Les Mills Core", sets: 1, reps: "60 Min", equip: "Rudergerät + Kurs", note: "FIX! Puls 140-150" }] },
    { date: "2026-11-21", week: 7, phase: 3, day: "Samstag", type: "kraft",
      title: "Kraft + Technik",
      exercises: [
        { name: "Telemark-Lunge + Wall Sit + Step-down (Kombi)", sets: 3, reps: "je 10-12",     equip: "Mix",        note: "Kombinations-Set!" },
        { name: "Wallball Squat-to-Press",                        sets: 3, reps: "12",            equip: "6kg Wallball",note: "" },
        { name: "Einbeinstand auf instabilem Untergrund",         sets: 3, reps: "60 Sek.",       equip: "Kein",       note: "Propriozeption Max" },
        { name: "Telemark-Position vor Spiegel",                  sets: 5, reps: "30 Sek./Seite", equip: "Stange",     note: "Technik einschleifen!" },
        { name: "Stretching 15 Min",                              sets: 1, reps: "15 Min",        equip: "Kein",       note: "" }
      ]
    },
    { date: "2026-11-22", week: 7, phase: 3, day: "Sonntag",    type: "pause",    title: "Aktiv - Treppensteigen",   exercises: [{ name: "Treppensteigen 10-15 Min + Spaziergang", sets: 1, reps: "45 Min", equip: "Kein", note: "Bergab simulieren" }] },
    { date: "2026-11-23", week: 8, phase: 3, day: "Montag",     type: "kraft",    title: "Kraft - Skivorbereitung",  exercises: [{ name: "Wie Woche 7 Montag - Steigerung", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-24", week: 8, phase: 3, day: "Dienstag",   type: "ausdauer", title: "Rad Intervalle 50 Min",    exercises: [{ name: "Rad Intervalle", sets: 1, reps: "50 Min", equip: "Fahrrad", note: "Puls bis 155" }] },
    { date: "2026-11-25", week: 8, phase: 3, day: "Mittwoch",   type: "kraft",    title: "Kraft - Skivorbereitung",  exercises: [{ name: "Wie Woche 7 Mittwoch", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-26", week: 8, phase: 3, day: "Donnerstag", type: "ausdauer", title: "Schwimmen 45 Min",         exercises: [{ name: "Schwimmen (Kraul)", sets: 1, reps: "45 Min", equip: "Kein", note: "" }] },
    { date: "2026-11-27", week: 8, phase: 3, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 30 Min + Les Mills Core", sets: 1, reps: "60 Min", equip: "Rudergerät + Kurs", note: "FIX!" }] },
    { date: "2026-11-28", week: 8, phase: 3, day: "Samstag",    type: "kraft",    title: "Kraft + Technik",          exercises: [{ name: "Wie Woche 7 Samstag", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-11-29", week: 8, phase: 3, day: "Sonntag",    type: "pause",    title: "Aktiv - Treppensteigen",   exercises: [{ name: "Treppensteigen + Spaziergang", sets: 1, reps: "45 Min", equip: "Kein", note: "" }] },
    { date: "2026-11-30", week: 9, phase: 3, day: "Montag",     type: "kraft",    title: "Kraft - Skivorbereitung",  exercises: [{ name: "Wie Woche 7 Montag - Maximum Phase 3", sets: 0, reps: "", equip: "", note: "Letzte Woche Phase 3!" }] },
    { date: "2026-12-01", week: 9, phase: 3, day: "Dienstag",   type: "ausdauer", title: "Rad Intervalle 50 Min",    exercises: [{ name: "Rad Intervalle", sets: 1, reps: "50 Min", equip: "Fahrrad", note: "" }] },
    { date: "2026-12-02", week: 9, phase: 3, day: "Mittwoch",   type: "kraft",    title: "Kraft - Skivorbereitung",  exercises: [{ name: "Wie Woche 7 Mittwoch", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-12-03", week: 9, phase: 3, day: "Donnerstag", type: "ausdauer", title: "Schwimmen 45 Min",         exercises: [{ name: "Schwimmen (Kraul)", sets: 1, reps: "45 Min", equip: "Kein", note: "" }] },
    { date: "2026-12-04", week: 9, phase: 3, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 30 Min + Les Mills Core", sets: 1, reps: "60 Min", equip: "Rudergerät + Kurs", note: "FIX!" }] },
    { date: "2026-12-05", week: 9, phase: 3, day: "Samstag",    type: "kraft",    title: "Kraft + Technik",          exercises: [{ name: "Wie Woche 7 Samstag", sets: 0, reps: "", equip: "", note: "" }] },
    { date: "2026-12-06", week: 9, phase: 3, day: "Sonntag",    type: "pause",    title: "Aktiv - Treppensteigen",   exercises: [{ name: "Treppensteigen + Spaziergang", sets: 1, reps: "45 Min", equip: "Kein", note: "" }] },
    // ===== WOCHE 10 | Phase 4 =====
    { date: "2026-12-07", week: 10, phase: 4, day: "Montag", type: "kraft",
      title: "Kraft 60% - Tapering",
      exercises: [
        { name: "Tägliche Mobility-Routine",  sets: 1, reps: "15 Min",      equip: "Kein", note: "" },
        { name: "Telemark-Lunge + Wall Sit",  sets: 2, reps: "8 / 30 Sek.", equip: "Kein", note: "Volumen runter!" },
        { name: "Stretching Komplett",        sets: 1, reps: "10 Min",      equip: "Kein", note: "" }
      ]
    },
    { date: "2026-12-08", week: 10, phase: 4, day: "Dienstag",   type: "ausdauer", title: "Rad locker 30 Min",        exercises: [{ name: "Radfahren locker", sets: 1, reps: "30 Min", equip: "Fahrrad", note: "Körper frisch halten" }] },
    { date: "2026-12-09", week: 10, phase: 4, day: "Mittwoch", type: "kraft",
      title: "Kraft 60% + Technik",
      exercises: [
        { name: "Goblet Squat + Einbeinstand",   sets: 2, reps: "8 / 45 Sek.",  equip: "12kg Sandsack", note: "" },
        { name: "Telemark-Position vor Spiegel", sets: 3, reps: "30 Sek./Seite", equip: "Stange",        note: "Letzte Technik!" },
        { name: "Stretching Komplett",           sets: 1, reps: "10 Min",        equip: "Kein",          note: "" }
      ]
    },
    { date: "2026-12-10", week: 10, phase: 4, day: "Donnerstag", type: "pause",    title: "Pause - Dehnen",           exercises: [{ name: "Spaziergang + sanft Dehnen", sets: 1, reps: "30 Min", equip: "Kein", note: "Knie täglich checken!" }] },
    { date: "2026-12-11", week: 10, phase: 4, day: "Freitag",    type: "fix",      title: "🟠 FIX: Rudern 20 Min + Les Mills Core", isFix: true, exercises: [{ name: "Rudern 20 Min (kürzer!) + Les Mills Core", sets: 1, reps: "50 Min", equip: "Rudergerät + Kurs", note: "FIX! Leichter diese Woche" }] },
    { date: "2026-12-12", week: 10, phase: 4, day: "Samstag", type: "kraft",
      title: "Letzte Kräftigung + Ausrüstung",
      exercises: [
        { name: "Telemark-Lunge + Einbeinstand", sets: 2, reps: "6/Seite / 45 Sek.", equip: "Kein",          note: "Letzte Kräftigung" },
        { name: "Ausrüstung vorbereiten",        sets: 0, reps: "",                   equip: "Ski-Equipment", note: "Bindung einstellen, Ski wachsen!" }
      ]
    },
    { date: "2026-12-13", week: 10, phase: 4, day: "Sonntag", type: "pause",
      title: "RUHETAG - MORGEN GEHT'S LOS!",
      exercises: [
        { name: "Ausruhen, Beine hochlegen, gut schlafen!", sets: 0, reps: "", equip: "Kein", note: "MORGEN: Wiedersberger Horn 🏔️" }
      ]
    }
  ]
};
