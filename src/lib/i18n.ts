export type Language = 'en' | 'hi' | 'te' | 'ta';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

export const languages: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
];

const translations: Record<Language, Record<string, string>> = {
  en: {
    // App
    shopMemory: 'Shop Memory',
    whatBusiness: 'What type of business do you run?',
    changeShopType: 'Change shop type',

    // Shop categories
    'cat.tailor': 'Tailor',
    'cat.rice-mill': 'Rice Mill',
    'cat.potter': 'Potter',
    'cat.shopkeeper': 'General Store',
    'cat.repair': 'Repair Shop',
    'cat.tutor': 'Tutor / Coaching',
    'cat.hardware': 'Hardware Store',
    'cat.other': 'Other',

    // Dashboard
    todaysOrders: "Today's Orders",
    todaysBatches: "Today's Batches",
    todaysSales: "Today's Sales",
    todaysJobs: "Today's Jobs",
    todaysEnrollments: "Today's Enrollments",
    pendingPayments: 'Pending Payments',
    overdueDelivery: 'Overdue Delivery',
    overduePickup: 'Overdue Pickup',
    overdueSession: 'Overdue Session',
    addNewOrder: 'Add New Order',
    addNewBatch: 'Add New Batch',
    addNewSale: 'Add New Sale',
    addNewJob: 'Add New Job',
    addNewStudent: 'Add New Student',

    // Add Order
    customerName: 'Customer Name',
    studentName: 'Student Name',
    phoneNumber: 'Phone Number',
    deliveryDate: 'Delivery Date',
    pickupDate: 'Pickup Date',
    sessionDate: 'Session Date',
    totalAmount: 'Total Amount (₹)',
    advancePaid: 'Advance Paid (₹)',
    status: 'Status',
    saveOrder: 'Save Order',
    saveBatch: 'Save Batch',
    saveSale: 'Save Sale',
    saveJob: 'Save Job',
    saveEnrollment: 'Save Enrollment',
    fillRequired: 'Please fill customer name, item, and delivery date',
    orderAdded: 'Order added!',
    batchAdded: 'Batch added!',
    saleAdded: 'Sale added!',
    jobAdded: 'Job added!',
    enrollmentAdded: 'Enrollment added!',

    // Statuses
    received: 'Received',
    inProgress: 'In Progress',
    ready: 'Ready',
    delivered: 'Delivered',

    // Item labels per category
    'item.tailor': 'Stitching Work',
    'item.rice-mill': 'Grain / Work',
    'item.potter': 'Item / Vessel',
    'item.shopkeeper': 'Item Sold',
    'item.repair': 'Repair Work',
    'item.tutor': 'Subject / Course',
    'item.hardware': 'Material / Item',
    'item.other': 'Item / Work',

    // Payments
    noPendingPayments: '🎉 No pending payments!',
    paid: 'Paid',
    remind: 'Remind',
    daysOverdue: 'days overdue',
    paymentMarked: 'Payment marked for',

    // Customers
    customers: 'Customers',
    students: 'Students',
    searchPlaceholder: 'Search by name or phone...',
    searchHint: 'Type a name or phone number to search',
    noCustomersFound: 'No customers found',
    totalBusiness: 'Total Business',

    // Bottom Nav
    home: 'Home',
    newOrder: 'New Order',
    payments: 'Payments',

    // Language
    chooseLanguage: 'Choose Language',
    language: 'Language',
  },

  hi: {
    shopMemory: 'शॉप मेमोरी',
    whatBusiness: 'आप कौन सा व्यापार चलाते हैं?',
    changeShopType: 'दुकान का प्रकार बदलें',

    'cat.tailor': 'दर्जी',
    'cat.rice-mill': 'चावल मिल',
    'cat.potter': 'कुम्हार',
    'cat.shopkeeper': 'किराना दुकान',
    'cat.repair': 'रिपेयर शॉप',
    'cat.tutor': 'ट्यूशन / कोचिंग',
    'cat.hardware': 'हार्डवेयर स्टोर',
    'cat.other': 'अन्य',

    todaysOrders: 'आज के ऑर्डर',
    todaysBatches: 'आज के बैच',
    todaysSales: 'आज की बिक्री',
    todaysJobs: 'आज के काम',
    todaysEnrollments: 'आज के दाखिले',
    pendingPayments: 'बाकी भुगतान',
    overdueDelivery: 'देरी से डिलीवरी',
    overduePickup: 'देरी से पिकअप',
    overdueSession: 'देरी से सत्र',
    addNewOrder: 'नया ऑर्डर जोड़ें',
    addNewBatch: 'नया बैच जोड़ें',
    addNewSale: 'नई बिक्री जोड़ें',
    addNewJob: 'नया काम जोड़ें',
    addNewStudent: 'नया छात्र जोड़ें',

    customerName: 'ग्राहक का नाम',
    studentName: 'छात्र का नाम',
    phoneNumber: 'फ़ोन नंबर',
    deliveryDate: 'डिलीवरी तारीख',
    pickupDate: 'पिकअप तारीख',
    sessionDate: 'सत्र तारीख',
    totalAmount: 'कुल राशि (₹)',
    advancePaid: 'अग्रिम भुगतान (₹)',
    status: 'स्थिति',
    saveOrder: 'ऑर्डर सेव करें',
    saveBatch: 'बैच सेव करें',
    saveSale: 'बिक्री सेव करें',
    saveJob: 'काम सेव करें',
    saveEnrollment: 'दाखिला सेव करें',
    fillRequired: 'कृपया ग्राहक का नाम, आइटम और डिलीवरी तारीख भरें',
    orderAdded: 'ऑर्डर जोड़ा गया!',
    batchAdded: 'बैच जोड़ा गया!',
    saleAdded: 'बिक्री जोड़ी गई!',
    jobAdded: 'काम जोड़ा गया!',
    enrollmentAdded: 'दाखिला जोड़ा गया!',

    received: 'प्राप्त',
    inProgress: 'प्रगति में',
    ready: 'तैयार',
    delivered: 'डिलीवर',

    'item.tailor': 'सिलाई का काम',
    'item.rice-mill': 'अनाज / काम',
    'item.potter': 'बर्तन / मटका',
    'item.shopkeeper': 'बेचा गया सामान',
    'item.repair': 'मरम्मत का काम',
    'item.tutor': 'विषय / कोर्स',
    'item.hardware': 'सामग्री / आइटम',
    'item.other': 'आइटम / काम',

    noPendingPayments: '🎉 कोई बाकी भुगतान नहीं!',
    paid: 'भुगतान हुआ',
    remind: 'याद दिलाएं',
    daysOverdue: 'दिन देरी',
    paymentMarked: 'भुगतान दर्ज किया गया',

    customers: 'ग्राहक',
    students: 'छात्र',
    searchPlaceholder: 'नाम या फ़ोन से खोजें...',
    searchHint: 'खोजने के लिए नाम या फ़ोन नंबर लिखें',
    noCustomersFound: 'कोई ग्राहक नहीं मिला',
    totalBusiness: 'कुल व्यापार',

    home: 'होम',
    newOrder: 'नया ऑर्डर',
    payments: 'भुगतान',

    chooseLanguage: 'भाषा चुनें',
    language: 'भाषा',
  },

  te: {
    shopMemory: 'షాప్ మెమరీ',
    whatBusiness: 'మీరు ఏ వ్యాపారం నడుపుతారు?',
    changeShopType: 'షాప్ రకం మార్చండి',

    'cat.tailor': 'టైలర్',
    'cat.rice-mill': 'రైస్ మిల్',
    'cat.potter': 'కుమ్మరి',
    'cat.shopkeeper': 'కిరాణా దుకాణం',
    'cat.repair': 'రిపేర్ షాప్',
    'cat.tutor': 'ట్యూషన్ / కోచింగ్',
    'cat.hardware': 'హార్డ్‌వేర్ స్టోర్',
    'cat.other': 'ఇతరం',

    todaysOrders: 'ఈరోజు ఆర్డర్లు',
    todaysBatches: 'ఈరోజు బ్యాచ్‌లు',
    todaysSales: 'ఈరోజు అమ్మకాలు',
    todaysJobs: 'ఈరోజు పనులు',
    todaysEnrollments: 'ఈరోజు చేరికలు',
    pendingPayments: 'పెండింగ్ చెల్లింపులు',
    overdueDelivery: 'ఆలస్యమైన డెలివరీ',
    overduePickup: 'ఆలస్యమైన పికప్',
    overdueSession: 'ఆలస్యమైన సెషన్',
    addNewOrder: 'కొత్త ఆర్డర్ జోడించండి',
    addNewBatch: 'కొత్త బ్యాచ్ జోడించండి',
    addNewSale: 'కొత్త అమ్మకం జోడించండి',
    addNewJob: 'కొత్త పని జోడించండి',
    addNewStudent: 'కొత్త విద్యార్థి జోడించండి',

    customerName: 'కస్టమర్ పేరు',
    studentName: 'విద్యార్థి పేరు',
    phoneNumber: 'ఫోన్ నంబర్',
    deliveryDate: 'డెలివరీ తేదీ',
    pickupDate: 'పికప్ తేదీ',
    sessionDate: 'సెషన్ తేదీ',
    totalAmount: 'మొత్తం (₹)',
    advancePaid: 'అడ్వాన్స్ (₹)',
    status: 'స్థితి',
    saveOrder: 'ఆర్డర్ సేవ్ చేయండి',
    saveBatch: 'బ్యాచ్ సేవ్ చేయండి',
    saveSale: 'అమ్మకం సేవ్ చేయండి',
    saveJob: 'పని సేవ్ చేయండి',
    saveEnrollment: 'చేరిక సేవ్ చేయండి',
    fillRequired: 'దయచేసి కస్టమర్ పేరు, ఐటెమ్ మరియు డెలివరీ తేదీ నింపండి',
    orderAdded: 'ఆర్డర్ జోడించబడింది!',
    batchAdded: 'బ్యాచ్ జోడించబడింది!',
    saleAdded: 'అమ్మకం జోడించబడింది!',
    jobAdded: 'పని జోడించబడింది!',
    enrollmentAdded: 'చేరిక జోడించబడింది!',

    received: 'అందుకుంది',
    inProgress: 'పురోగతిలో',
    ready: 'సిద్ధం',
    delivered: 'డెలివరీ అయింది',

    'item.tailor': 'కుట్టు పని',
    'item.rice-mill': 'ధాన్యం / పని',
    'item.potter': 'కుండ / పాత్ర',
    'item.shopkeeper': 'అమ్మిన వస్తువు',
    'item.repair': 'రిపేర్ పని',
    'item.tutor': 'సబ్జెక్ట్ / కోర్స్',
    'item.hardware': 'సామగ్రి / వస్తువు',
    'item.other': 'వస్తువు / పని',

    noPendingPayments: '🎉 పెండింగ్ చెల్లింపులు లేవు!',
    paid: 'చెల్లించారు',
    remind: 'గుర్తు చేయండి',
    daysOverdue: 'రోజులు ఆలస్యం',
    paymentMarked: 'చెల్లింపు నమోదు చేయబడింది',

    customers: 'కస్టమర్లు',
    students: 'విద్యార్థులు',
    searchPlaceholder: 'పేరు లేదా ఫోన్‌తో వెతకండి...',
    searchHint: 'వెతకడానికి పేరు లేదా ఫోన్ నంబర్ టైప్ చేయండి',
    noCustomersFound: 'కస్టమర్లు కనుగొనబడలేదు',
    totalBusiness: 'మొత్తం వ్యాపారం',

    home: 'హోమ్',
    newOrder: 'కొత్త ఆర్డర్',
    payments: 'చెల్లింపులు',

    chooseLanguage: 'భాషను ఎంచుకోండి',
    language: 'భాష',
  },

  ta: {
    shopMemory: 'ஷாப் மெமரி',
    whatBusiness: 'நீங்கள் என்ன தொழில் நடத்துகிறீர்கள்?',
    changeShopType: 'கடை வகையை மாற்றவும்',

    'cat.tailor': 'தையல்காரர்',
    'cat.rice-mill': 'அரிசி ஆலை',
    'cat.potter': 'குயவர்',
    'cat.shopkeeper': 'மளிகைக் கடை',
    'cat.repair': 'பழுதுபார்க்கும் கடை',
    'cat.tutor': 'டியூஷன் / பயிற்சி',
    'cat.hardware': 'ஹார்ட்வேர் கடை',
    'cat.other': 'மற்றவை',

    todaysOrders: 'இன்றைய ஆர்டர்கள்',
    todaysBatches: 'இன்றைய பேட்ச்கள்',
    todaysSales: 'இன்றைய விற்பனை',
    todaysJobs: 'இன்றைய வேலைகள்',
    todaysEnrollments: 'இன்றைய சேர்க்கைகள்',
    pendingPayments: 'நிலுவை கட்டணங்கள்',
    overdueDelivery: 'தாமதமான டெலிவரி',
    overduePickup: 'தாமதமான பிக்கப்',
    overdueSession: 'தாமதமான அமர்வு',
    addNewOrder: 'புதிய ஆர்டர் சேர்க்கவும்',
    addNewBatch: 'புதிய பேட்ச் சேர்க்கவும்',
    addNewSale: 'புதிய விற்பனை சேர்க்கவும்',
    addNewJob: 'புதிய வேலை சேர்க்கவும்',
    addNewStudent: 'புதிய மாணவர் சேர்க்கவும்',

    customerName: 'வாடிக்கையாளர் பெயர்',
    studentName: 'மாணவர் பெயர்',
    phoneNumber: 'தொலைபேசி எண்',
    deliveryDate: 'டெலிவரி தேதி',
    pickupDate: 'பிக்கப் தேதி',
    sessionDate: 'அமர்வு தேதி',
    totalAmount: 'மொத்த தொகை (₹)',
    advancePaid: 'முன்பணம் (₹)',
    status: 'நிலை',
    saveOrder: 'ஆர்டர் சேமிக்கவும்',
    saveBatch: 'பேட்ச் சேமிக்கவும்',
    saveSale: 'விற்பனை சேமிக்கவும்',
    saveJob: 'வேலை சேமிக்கவும்',
    saveEnrollment: 'சேர்க்கை சேமிக்கவும்',
    fillRequired: 'வாடிக்கையாளர் பெயர், பொருள் மற்றும் டெலிவரி தேதி நிரப்பவும்',
    orderAdded: 'ஆர்டர் சேர்க்கப்பட்டது!',
    batchAdded: 'பேட்ச் சேர்க்கப்பட்டது!',
    saleAdded: 'விற்பனை சேர்க்கப்பட்டது!',
    jobAdded: 'வேலை சேர்க்கப்பட்டது!',
    enrollmentAdded: 'சேர்க்கை சேர்க்கப்பட்டது!',

    received: 'பெறப்பட்டது',
    inProgress: 'நடைபெறுகிறது',
    ready: 'தயார்',
    delivered: 'டெலிவரி ஆனது',

    'item.tailor': 'தையல் வேலை',
    'item.rice-mill': 'தானியம் / வேலை',
    'item.potter': 'பானை / பாத்திரம்',
    'item.shopkeeper': 'விற்ற பொருள்',
    'item.repair': 'பழுது வேலை',
    'item.tutor': 'பாடம் / கோர்ஸ்',
    'item.hardware': 'பொருட்கள் / சாமான்',
    'item.other': 'பொருள் / வேலை',

    noPendingPayments: '🎉 நிலுவை கட்டணங்கள் இல்லை!',
    paid: 'செலுத்தப்பட்டது',
    remind: 'நினைவூட்டு',
    daysOverdue: 'நாட்கள் தாமதம்',
    paymentMarked: 'கட்டணம் பதிவு செய்யப்பட்டது',

    customers: 'வாடிக்கையாளர்கள்',
    students: 'மாணவர்கள்',
    searchPlaceholder: 'பெயர் அல்லது ஃபோனில் தேடவும்...',
    searchHint: 'தேட பெயர் அல்லது தொலைபேசி எண் தட்டச்சு செய்யவும்',
    noCustomersFound: 'வாடிக்கையாளர்கள் இல்லை',
    totalBusiness: 'மொத்த வியாபாரம்',

    home: 'முகப்பு',
    newOrder: 'புதிய ஆர்டர்',
    payments: 'கட்டணங்கள்',

    chooseLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    language: 'மொழி',
  },
};

const LANG_KEY = 'shop-memory-lang';

export function getLanguage(): Language {
  return (localStorage.getItem(LANG_KEY) as Language) || 'en';
}

export function setLanguage(lang: Language) {
  localStorage.setItem(LANG_KEY, lang);
}

export function t(key: string): string {
  const lang = getLanguage();
  return translations[lang]?.[key] || translations.en[key] || key;
}

// Helper to get category-aware translations
export function tCat(baseKey: string, catId?: string): string {
  // Maps category order types to translation key suffixes
  const catKeyMap: Record<string, Record<string, string>> = {
    todaysOrders: { 'rice-mill': 'todaysBatches', shopkeeper: 'todaysSales', hardware: 'todaysSales', repair: 'todaysJobs', tutor: 'todaysEnrollments' },
    addNewOrder: { 'rice-mill': 'addNewBatch', shopkeeper: 'addNewSale', hardware: 'addNewSale', repair: 'addNewJob', tutor: 'addNewStudent' },
    saveOrder: { 'rice-mill': 'saveBatch', shopkeeper: 'saveSale', hardware: 'saveSale', repair: 'saveJob', tutor: 'saveEnrollment' },
    orderAdded: { 'rice-mill': 'batchAdded', shopkeeper: 'saleAdded', hardware: 'saleAdded', repair: 'jobAdded', tutor: 'enrollmentAdded' },
    overdueDelivery: { 'rice-mill': 'overduePickup', repair: 'overduePickup', tutor: 'overdueSession' },
    customerName: { tutor: 'studentName' },
    deliveryDate: { 'rice-mill': 'pickupDate', repair: 'pickupDate', tutor: 'sessionDate' },
    customers: { tutor: 'students' },
  };

  const mapped = catId && catKeyMap[baseKey]?.[catId];
  return t(mapped || baseKey);
}
