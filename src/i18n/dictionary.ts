// =============================================================================
// STRUX — bilingual dictionary (English / Arabic)
// Keys are dot-namespaced. Missing keys fall back to the key's English value.
// =============================================================================

export type Lang = 'en' | 'ar'

type Dict = Record<string, { en: string; ar: string }>

export const dict: Dict = {
  // Brand / tagline
  'brand.tagline': { en: 'Engineering Intelligence', ar: 'ذكاء هندسي' },
  'brand.fulltagline': {
    en: 'The AI Operating Layer for Engineering & Construction',
    ar: 'طبقة التشغيل الذكية للهندسة والإنشاءات',
  },
  'brand.platform': { en: 'AI Engineering Intelligence Platform', ar: 'منصة الذكاء الهندسي بالذكاء الاصطناعي' },

  // Navigation
  'nav.dashboard': { en: 'Dashboard', ar: 'لوحة القيادة' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.upload': { en: 'Upload BIM', ar: 'رفع نموذج BIM' },
  'nav.analysis': { en: 'AI Analysis', ar: 'التحليل الذكي' },
  'nav.viewer': { en: '3D Viewer', ar: 'العارض ثلاثي الأبعاد' },
  'nav.settings': { en: 'Admin & Settings', ar: 'الإدارة والإعدادات' },

  // Page titles
  'page.dashboard': { en: 'Command Dashboard', ar: 'لوحة القيادة المركزية' },
  'page.projects': { en: 'Project Workspace', ar: 'مساحة عمل المشاريع' },
  'page.upload': { en: 'BIM File Upload', ar: 'رفع ملفات BIM' },
  'page.analysis': { en: 'AI Analysis Results', ar: 'نتائج التحليل الذكي' },
  'page.viewer': { en: '3D Model Viewer', ar: 'عارض النموذج ثلاثي الأبعاد' },
  'page.settings': { en: 'Admin & Settings', ar: 'الإدارة والإعدادات' },

  // Topbar
  'top.search': { en: 'Search projects, clashes, RFIs…', ar: 'ابحث في المشاريع، التعارضات، الطلبات…' },
  'top.aiOnline': { en: 'AI Engine Online', ar: 'محرك الذكاء يعمل' },
  'top.signout': { en: 'Sign out', ar: 'تسجيل الخروج' },
  'top.role': { en: 'BIM Manager · Enterprise', ar: 'مدير BIM · باقة المؤسسات' },

  // Common
  'common.openProject': { en: 'Open Project', ar: 'فتح المشروع' },
  'common.viewAll': { en: 'View all', ar: 'عرض الكل' },
  'common.issues': { en: 'issues', ar: 'مشكلة' },
  'common.bimScore': { en: 'BIM score', ar: 'تقييم BIM' },
  'common.lastUpload': { en: 'Last upload', ar: 'آخر رفع' },
  'common.risk': { en: 'risk', ar: 'مخاطرة' },
  'common.save': { en: 'Save Changes', ar: 'حفظ التغييرات' },
  'common.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'common.download': { en: 'Download PDF', ar: 'تحميل PDF' },
  'common.print': { en: 'Print', ar: 'طباعة' },
  'common.severity': { en: 'Severity', ar: 'الخطورة' },
  'common.description': { en: 'Description', ar: 'الوصف' },
  'common.recommendation': { en: 'Recommended Action', ar: 'الإجراء الموصى به' },
  'common.discipline': { en: 'Discipline', ar: 'التخصص' },
  'common.priority': { en: 'Priority', ar: 'الأولوية' },
  'common.status': { en: 'Status', ar: 'الحالة' },

  // Login
  'login.signin': { en: 'Sign in to your workspace', ar: 'تسجيل الدخول إلى مساحة عملك' },
  'login.welcome': { en: 'Welcome back. Select your role to continue to the demo.', ar: 'مرحبًا بعودتك. اختر دورك للمتابعة إلى العرض التجريبي.' },
  'login.signinAs': { en: 'Sign in as', ar: 'تسجيل الدخول بصفة' },
  'login.email': { en: 'Work email', ar: 'البريد الإلكتروني للعمل' },
  'login.password': { en: 'Password', ar: 'كلمة المرور' },
  'login.enter': { en: 'Enter STRUX Platform', ar: 'الدخول إلى منصة STRUX' },
  'login.demoNote': { en: 'Demo prototype · no real authentication. Any credentials continue.', ar: 'نموذج تجريبي · بدون مصادقة حقيقية. أي بيانات اعتماد تتابع.' },
  'login.builtFor': { en: 'Built for Contractors, Consultants, BIM Managers & Owners', ar: 'مصمم للمقاولين والاستشاريين ومديري BIM والملاك' },
  'login.heroTitle1': { en: 'The AI Operating Layer for', ar: 'طبقة التشغيل الذكية لـ' },
  'login.heroTitle2': { en: 'Engineering & Construction', ar: 'الهندسة والإنشاءات' },
  'login.heroDesc': {
    en: 'STRUX adds an intelligence layer on top of your BIM files, IFC/Revit models, BOQs and Saudi compliance requirements — without replacing Autodesk, Revit or Navisworks.',
    ar: 'تضيف STRUX طبقة ذكاء فوق ملفات BIM ونماذج IFC/Revit وجداول الكميات ومتطلبات الامتثال السعودية — دون استبدال Autodesk أو Revit أو Navisworks.',
  },
  'login.residency': { en: 'KSA Data Residency', ar: 'استضافة البيانات داخل السعودية' },
  'login.iso': { en: 'ISO 19650 Aligned', ar: 'متوافق مع ISO 19650' },
  'login.sso': { en: 'Enterprise SSO Ready', ar: 'جاهز للدخول الموحد للمؤسسات' },

  // Roles
  'role.contractor': { en: 'Contractor', ar: 'مقاول' },
  'role.consultant': { en: 'Consultant', ar: 'استشاري' },
  'role.bim': { en: 'BIM Manager', ar: 'مدير BIM' },
  'role.owner': { en: 'Owner', ar: 'مالك' },

  // Feature chips
  'feat.qaqc': { en: 'BIM QA/QC', ar: 'ضبط جودة BIM' },
  'feat.clash': { en: 'Clash Intelligence', ar: 'ذكاء التعارضات' },
  'feat.compliance': { en: 'Saudi Compliance', ar: 'الامتثال السعودي' },

  // Dashboard
  'dash.greeting': { en: 'Good morning, Saeed — your portfolio is', ar: 'صباح الخير سعيد — محفظة مشاريعك' },
  'dash.healthy': { en: 'healthy', ar: 'بحالة جيدة' },
  'dash.portfolioSub': { en: '18 active projects · 38 high-risk issues need attention this week.', ar: '18 مشروعًا نشطًا · 38 مشكلة عالية الخطورة تحتاج إلى اهتمام هذا الأسبوع.' },
  'dash.portfolioLive': { en: 'Portfolio Intelligence · Live', ar: 'ذكاء المحفظة · مباشر' },
  'dash.bimHealth': { en: 'BIM Health', ar: 'صحة BIM' },
  'dash.compliance': { en: 'Compliance', ar: 'الامتثال' },
  'kpi.totalIssues': { en: 'Total Issues', ar: 'إجمالي المشكلات' },
  'kpi.highRisk': { en: 'High Risk Issues', ar: 'مشكلات عالية الخطورة' },
  'kpi.openRfis': { en: 'Open RFIs', ar: 'طلبات معلومات مفتوحة' },
  'kpi.projects': { en: 'Active Projects', ar: 'المشاريع النشطة' },
  'kpi.reports': { en: 'Reports Generated', ar: 'التقارير المُنشأة' },
  'kpi.bimScore': { en: 'BIM Health Score', ar: 'مؤشر صحة BIM' },
  'kpi.complianceScore': { en: 'Compliance Score', ar: 'مؤشر الامتثال' },
  'kpi.highClashes': { en: 'High-Risk Clashes', ar: 'تعارضات عالية الخطورة' },
  'dash.trend': { en: 'Issue Resolution & Health Trend', ar: 'اتجاه حل المشكلات والصحة' },
  'dash.trendSub': { en: 'Detected vs resolved over the last 8 weeks', ar: 'المكتشفة مقابل المحلولة خلال آخر 8 أسابيع' },
  'dash.byDiscipline': { en: 'Issues by Discipline', ar: 'المشكلات حسب التخصص' },
  'dash.severity': { en: 'Severity Breakdown', ar: 'توزيع الخطورة' },
  'dash.projectStatus': { en: 'Project Status', ar: 'حالة المشاريع' },

  // Projects
  'proj.subtitle': { en: 'active projects · sorted by risk exposure', ar: 'مشاريع نشطة · مرتبة حسب التعرض للمخاطر' },
  'proj.uploadNew': { en: 'Upload New Model', ar: 'رفع نموذج جديد' },
  'proj.portfolioValue': { en: 'Portfolio Value', ar: 'قيمة المحفظة' },
  'proj.avgBim': { en: 'Avg BIM Score', ar: 'متوسط تقييم BIM' },
  'proj.openIssues': { en: 'Open Issues', ar: 'مشكلات مفتوحة' },
  'proj.avgCompliance': { en: 'Avg Compliance', ar: 'متوسط الامتثال' },
  'proj.progress': { en: 'Project progress', ar: 'تقدّم المشروع' },
  'proj.highRisk': { en: 'High Risk', ar: 'عالية الخطورة' },

  // Upload
  'up.title': { en: 'Upload BIM & Project Files', ar: 'رفع ملفات BIM والمشروع' },
  'up.sub': { en: 'STRUX reads your models on top of Autodesk/Revit — nothing is replaced.', ar: 'تقرأ STRUX نماذجك فوق Autodesk/Revit — دون استبدال أي شيء.' },
  'up.drop': { en: 'Drag & drop files here', ar: 'اسحب وأفلت الملفات هنا' },
  'up.browse': { en: 'or click to browse · IFC, RVT, XLSX, PDF (max 2 GB)', ar: 'أو انقر للتصفح · IFC، RVT، XLSX، PDF (بحد أقصى 2 جيجابايت)' },
  'up.run': { en: 'Run STRUX AI Analysis', ar: 'تشغيل تحليل STRUX الذكي' },
  'up.analyzing': { en: 'Analyzing…', ar: 'جارٍ التحليل…' },
  'up.pipeline': { en: 'AI Processing Pipeline', ar: 'مسار المعالجة بالذكاء الاصطناعي' },
  'up.awaiting': { en: 'Awaiting input', ar: 'بانتظار الإدخال' },
  'up.processing': { en: 'Processing…', ar: 'جارٍ المعالجة…' },
  'up.complete': { en: 'Complete', ar: 'مكتمل' },
  'up.done': { en: 'Done', ar: 'تم' },
  'up.analysisComplete': { en: 'Analysis complete', ar: 'اكتمل التحليل' },
  'up.resultSummary': { en: '48,210 elements · 72 issues · 6 clashes · 91% compliance. Smart report ready.', ar: '48,210 عنصرًا · 72 مشكلة · 6 تعارضات · 91% امتثال. التقرير الذكي جاهز.' },
  'up.viewResults': { en: 'View Results', ar: 'عرض النتائج' },
  'up.idleHint': { en: 'Select your files and run the analysis to watch the STRUX engine work.', ar: 'اختر ملفاتك وشغّل التحليل لمشاهدة محرك STRUX يعمل.' },

  // Pipeline stages
  'pl.read': { en: 'Reading BIM Model', ar: 'قراءة نموذج BIM' },
  'pl.extract': { en: 'Extracting Elements', ar: 'استخراج العناصر' },
  'pl.qaqc': { en: 'Running QA/QC Checks', ar: 'تشغيل فحوصات ضبط الجودة' },
  'pl.clash': { en: 'Detecting Clashes', ar: 'كشف التعارضات' },
  'pl.compliance': { en: 'Checking Saudi Compliance', ar: 'فحص الامتثال السعودي' },
  'pl.report': { en: 'Generating Smart Report', ar: 'إنشاء التقرير الذكي' },

  // Accepted files
  'file.ifc': { en: 'IFC Model', ar: 'نموذج IFC' },
  'file.revit': { en: 'Revit File', ar: 'ملف Revit' },
  'file.boq': { en: 'BOQ Excel', ar: 'جدول كميات Excel' },
  'file.specs': { en: 'Specifications PDF', ar: 'المواصفات PDF' },

  // Analysis tabs
  'tab.overview': { en: 'Overview', ar: 'نظرة عامة' },
  'tab.3d': { en: '3D Model', ar: 'النموذج ثلاثي الأبعاد' },
  'tab.qaqc': { en: 'QA/QC Checks', ar: 'فحوصات الجودة' },
  'tab.clash': { en: 'Clash Intelligence', ar: 'ذكاء التعارضات' },
  'tab.compliance': { en: 'Saudi Compliance', ar: 'الامتثال السعودي' },
  'tab.quantity': { en: 'Quantity Extraction', ar: 'استخراج الكميات' },
  'tab.rfi': { en: 'RFI Generator', ar: 'مولّد طلبات المعلومات' },
  'tab.chat': { en: 'AI Chat', ar: 'المساعد الذكي' },
  'tab.report': { en: 'Executive Report', ar: 'التقرير التنفيذي' },

  // Analysis header
  'an.elements': { en: 'elements', ar: 'عنصر' },
  'an.highRisk': { en: 'high-risk', ar: 'عالية الخطورة' },
  'an.analyzed': { en: 'Federated model v12 · Analyzed 2 hours ago', ar: 'النموذج الموحد الإصدار 12 · تم تحليله قبل ساعتين' },

  // 3D viewer
  '3d.title': { en: 'Interactive 3D BIM Viewer', ar: 'العارض ثلاثي الأبعاد التفاعلي' },
  '3d.sub': { en: 'Federated model with live clash & issue overlays. Drag to orbit, scroll to zoom.', ar: 'نموذج موحد مع طبقات تعارض ومشكلات حية. اسحب للدوران، مرّر للتكبير.' },
  '3d.layers': { en: 'Model Layers', ar: 'طبقات النموذج' },
  '3d.structure': { en: 'Structure', ar: 'الإنشائي' },
  '3d.mep': { en: 'MEP Services', ar: 'الخدمات الميكانيكية والكهربائية' },
  '3d.architecture': { en: 'Architecture', ar: 'المعماري' },
  '3d.clashes': { en: 'Clash Markers', ar: 'علامات التعارض' },
  '3d.selected': { en: 'Selected Clash', ar: 'التعارض المحدد' },
  '3d.selectHint': { en: 'Click a red marker in the model or a clash below to inspect it.', ar: 'انقر على علامة حمراء في النموذج أو تعارض بالأسفل لفحصه.' },
  '3d.clashList': { en: 'Clashes in View', ar: 'التعارضات في المشهد' },
  '3d.reset': { en: 'Reset View', ar: 'إعادة ضبط العرض' },
  '3d.cost': { en: 'Cost Impact', ar: 'الأثر المالي' },
  '3d.delay': { en: 'Delay', ar: 'التأخير' },
  '3d.days': { en: 'days', ar: 'أيام' },
  '3d.loading': { en: 'Loading 3D model…', ar: 'جارٍ تحميل النموذج ثلاثي الأبعاد…' },

  // Settings
  'set.company': { en: 'Company', ar: 'الشركة' },
  'set.users': { en: 'Users & Roles', ar: 'المستخدمون والأدوار' },
  'set.permissions': { en: 'Permissions', ar: 'الصلاحيات' },
  'set.integrations': { en: 'Integrations', ar: 'التكاملات' },
  'set.security': { en: 'Security', ar: 'الأمان' },
  'set.subscription': { en: 'Subscription', ar: 'الاشتراك' },
  'set.companyProfile': { en: 'Company Profile', ar: 'ملف الشركة' },
  'set.team': { en: 'Team Members', ar: 'أعضاء الفريق' },
  'set.teamSub': { en: 'Manage who can access your STRUX workspace', ar: 'إدارة من يمكنه الوصول إلى مساحة عمل STRUX' },
  'set.invite': { en: 'Invite User', ar: 'دعوة مستخدم' },
  'set.matrix': { en: 'Project Permissions Matrix', ar: 'مصفوفة صلاحيات المشروع' },
  'set.matrixSub': { en: 'Role-based access control across STRUX modules', ar: 'تحكم في الوصول قائم على الأدوار عبر وحدات STRUX' },
  'set.apiTitle': { en: 'API Integration', ar: 'تكامل واجهة البرمجة API' },
  'set.apiSub': { en: 'Connect STRUX to your existing construction tech stack.', ar: 'اربط STRUX بمنظومتك التقنية الإنشائية الحالية.' },
  'set.regenerate': { en: 'Regenerate Key', ar: 'إعادة توليد المفتاح' },
  'set.docs': { en: 'View Docs', ar: 'عرض الوثائق' },
  'set.connect': { en: 'Connect', ar: 'ربط' },
  'set.connected': { en: 'Connected', ar: 'مرتبط' },
  'set.securityTitle': { en: 'Saudi Data Residency & Security', ar: 'استضافة البيانات والأمان داخل السعودية' },
  'set.securityDesc': {
    en: 'All project models, BOQs and reports are hosted within Saudi Arabia in compliance with the PDPL and SDAIA data governance guidelines. Data never leaves the Kingdom.',
    ar: 'تُستضاف جميع نماذج المشاريع وجداول الكميات والتقارير داخل المملكة العربية السعودية امتثالًا لنظام حماية البيانات الشخصية وإرشادات حوكمة البيانات من سدايا. لا تغادر البيانات المملكة أبدًا.',
  },
  'set.name': { en: 'Name', ar: 'الاسم' },
  'set.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'set.roleCol': { en: 'Role', ar: 'الدور' },
  'set.currentPlan': { en: 'Current Plan', ar: 'الباقة الحالية' },
  'set.active': { en: 'Active', ar: 'مفعّلة' },
  'set.upgrade': { en: 'Upgrade', ar: 'ترقية' },
  'set.contactSales': { en: 'Contact Sales', ar: 'تواصل مع المبيعات' },

  // Chat
  'chat.suggested': { en: 'Suggested Questions', ar: 'أسئلة مقترحة' },
  'chat.tap': { en: 'Tap to ask the STRUX AI', ar: 'انقر لسؤال مساعد STRUX الذكي' },
  'chat.title': { en: 'STRUX Engineering AI', ar: 'مساعد STRUX الهندسي الذكي' },
  'chat.online': { en: 'Online', ar: 'متصل' },
  'chat.context': { en: 'Context: Riyadh Mixed-Use Tower · v12', ar: 'السياق: برج الرياض متعدد الاستخدامات · الإصدار 12' },
  'chat.placeholder': { en: 'Ask about risks, clashes, compliance, quantities…', ar: 'اسأل عن المخاطر، التعارضات، الامتثال، الكميات…' },
  'chat.greeting': {
    en: "Hello — I'm the STRUX Engineering AI. I've analysed the Riyadh Mixed-Use Tower model. Ask me anything about its risks, clashes, compliance or quantities.",
    ar: 'مرحبًا — أنا مساعد STRUX الهندسي الذكي. لقد حللت نموذج برج الرياض متعدد الاستخدامات. اسألني عن مخاطره أو تعارضاته أو امتثاله أو كمياته.',
  },

  // RFI
  'rfi.title': { en: 'AI RFI Generator', ar: 'مولّد طلبات المعلومات الذكي' },
  'rfi.sub': { en: 'Auto-drafts construction RFIs from clashes, compliance gaps and quantity variances.', ar: 'يصيغ تلقائيًا طلبات المعلومات من التعارضات وفجوات الامتثال وفروق الكميات.' },
  'rfi.generate': { en: 'Generate RFI from Issues', ar: 'توليد طلب معلومات من المشكلات' },
  'rfi.drafting': { en: 'Drafting…', ar: 'جارٍ الصياغة…' },

  // Language switch
  'lang.toggle': { en: 'العربية', ar: 'English' },

  // ---- Landing page ----
  'land.navProduct': { en: 'Product', ar: 'المنتج' },
  'land.navModules': { en: 'Modules', ar: 'الوحدات' },
  'land.navVision': { en: 'Vision 2030', ar: 'رؤية 2030' },
  'land.navInvestors': { en: 'Investors', ar: 'المستثمرون' },
  'land.signin': { en: 'Sign in', ar: 'تسجيل الدخول' },
  'land.launch': { en: 'Launch Demo', ar: 'تشغيل العرض' },
  'land.heroBadge': { en: 'Backed for the Saudi Vision 2030 construction boom', ar: 'مدعومة لطفرة الإنشاءات ضمن رؤية السعودية 2030' },
  'land.heroTitle1': { en: 'The AI Operating Layer for', ar: 'طبقة التشغيل الذكية لـ' },
  'land.heroTitle2': { en: 'Engineering & Construction', ar: 'الهندسة والإنشاءات' },
  'land.heroDesc': {
    en: 'STRUX turns your BIM models, IFC/Revit files, BOQs and specifications into decisions — automated QA/QC, clash intelligence, Saudi compliance, quantity take-off and executive reporting. It augments Autodesk, Revit and Navisworks; it never replaces them.',
    ar: 'تحوّل STRUX نماذج BIM وملفات IFC/Revit وجداول الكميات والمواصفات إلى قرارات — ضبط جودة آلي، وذكاء تعارضات، وامتثال سعودي، وحصر كميات، وتقارير تنفيذية. تعزّز Autodesk وRevit وNavisworks ولا تستبدلها أبدًا.',
  },
  'land.ctaPrimary': { en: 'Launch Live Demo', ar: 'تشغيل العرض المباشر' },
  'land.ctaSecondary': { en: 'For Investors', ar: 'للمستثمرين' },
  'land.trusted': { en: 'Built for the Kingdom’s largest developers & giga-projects', ar: 'مصمم لأكبر المطورين والمشاريع العملاقة في المملكة' },
  'land.statProjects': { en: 'Projects analysed', ar: 'مشاريع تم تحليلها' },
  'land.statElements': { en: 'BIM elements processed', ar: 'عناصر BIM تمت معالجتها' },
  'land.statSaved': { en: 'Rework cost avoided', ar: 'تكلفة إعادة عمل تم تفاديها' },
  'land.statCompliance': { en: 'Avg compliance lift', ar: 'متوسط تحسّن الامتثال' },
  'land.featuresTitle': { en: 'One intelligence layer. Seven decisions.', ar: 'طبقة ذكاء واحدة. سبعة قرارات.' },
  'land.featuresSub': { en: 'Everything a contractor, consultant, BIM manager or owner needs to de-risk a project.', ar: 'كل ما يحتاجه المقاول والاستشاري ومدير BIM والمالك لتقليل مخاطر المشروع.' },
  'land.howTitle': { en: 'From model to decision in minutes', ar: 'من النموذج إلى القرار في دقائق' },
  'land.howSub': { en: 'Upload once — STRUX AI does the rest.', ar: 'ارفع مرة واحدة — ويتولى STRUX AI الباقي.' },
  'land.showcaseTitle': { en: 'See the platform in action', ar: 'شاهد المنصة أثناء العمل' },
  'land.investorTitle': { en: 'A category-defining company for a $0.8T market', ar: 'شركة تصنع فئة جديدة في سوق بقيمة 0.8 تريليون دولار' },
  'land.investorSub': { en: 'Saudi Arabia is delivering the largest construction pipeline on earth. STRUX is the intelligence layer on top of all of it.', ar: 'تنفّذ السعودية أكبر محفظة إنشاءات في العالم. وSTRUX هي طبقة الذكاء فوقها بالكامل.' },
  'land.investorCta': { en: 'Open Investor Mode', ar: 'فتح وضع المستثمر' },
  'land.finalTitle': { en: 'Ready to see your portfolio through an AI lens?', ar: 'مستعد لرؤية محفظتك بعدسة الذكاء الاصطناعي؟' },
  'land.finalSub': { en: 'Explore the full interactive demo — no signup required.', ar: 'استكشف العرض التفاعلي الكامل — دون الحاجة للتسجيل.' },
  'land.footerTagline': { en: 'The AI Operating Layer for Engineering & Construction.', ar: 'طبقة التشغيل الذكية للهندسة والإنشاءات.' },
  'land.footerRights': { en: 'STRUX AI · Prototype. Illustrative data. Hosted in the Kingdom of Saudi Arabia.', ar: 'STRUX AI · نموذج أولي. بيانات توضيحية. مستضاف في المملكة العربية السعودية.' },

  // ---- Vision 2030 ----
  'v2030.tag': { en: 'Aligned with Saudi Vision 2030', ar: 'متوافقة مع رؤية السعودية 2030' },
  'v2030.title': { en: 'Powering the giga-projects of Vision 2030', ar: 'نُمكّن المشاريع العملاقة لرؤية 2030' },
  'v2030.desc': {
    en: 'Vision 2030 is mobilising over SAR 4 trillion in construction. STRUX brings digital transformation, local data sovereignty and engineering quality to the projects shaping the Kingdom’s future.',
    ar: 'تحشد رؤية 2030 أكثر من 4 تريليون ريال في الإنشاءات. تجلب STRUX التحول الرقمي والسيادة على البيانات وجودة الهندسة للمشاريع التي تصنع مستقبل المملكة.',
  },
  'v2030.localization': { en: 'Local data residency & PDPL compliance', ar: 'استضافة محلية للبيانات وامتثال لنظام حماية البيانات' },
  'v2030.digital': { en: 'Digital transformation of construction', ar: 'التحول الرقمي لقطاع الإنشاءات' },
  'v2030.quality': { en: 'World-class engineering quality & safety', ar: 'جودة وسلامة هندسية عالمية المستوى' },
  'v2030.giga': { en: 'Aligned with the national giga-project portfolio', ar: 'متوافقة مع محفظة المشاريع الوطنية العملاقة' },

  // ---- Executive dashboard ----
  'nav.executive': { en: 'Executive', ar: 'لوحة تنفيذية' },
  'page.executive': { en: 'Executive Dashboard', ar: 'اللوحة التنفيذية' },
  'exec.subtitle': { en: 'Board-level view of portfolio health, risk and financial exposure', ar: 'عرض على مستوى المجلس لصحة المحفظة والمخاطر والتعرّض المالي' },
  'exec.portfolioHealth': { en: 'Portfolio Health', ar: 'صحة المحفظة' },
  'exec.financialExposure': { en: 'Financial Exposure', ar: 'التعرّض المالي' },
  'exec.reworkAvoided': { en: 'Rework Avoided (YTD)', ar: 'إعادة عمل تم تفاديها (حتى تاريخه)' },
  'exec.scheduleRisk': { en: 'Schedule at Risk', ar: 'جدول زمني معرّض للخطر' },
  'exec.riskHeatmap': { en: 'Project Risk Heatmap', ar: 'خريطة حرارية لمخاطر المشاريع' },
  'exec.topRisks': { en: 'Top Portfolio Risks', ar: 'أبرز مخاطر المحفظة' },
  'exec.decisions': { en: 'Decisions Required', ar: 'قرارات مطلوبة' },
  'exec.financialByProject': { en: 'Financial Exposure by Project', ar: 'التعرّض المالي حسب المشروع' },

  // ---- Investor mode ----
  'nav.investor': { en: 'Investor Mode', ar: 'وضع المستثمر' },
  'page.investor': { en: 'Investor Mode', ar: 'وضع المستثمر' },
  'inv.subtitle': { en: 'The opportunity, the market and the traction behind STRUX AI', ar: 'الفرصة والسوق والنمو خلف STRUX AI' },
  'inv.thesis': { en: 'Investment Thesis', ar: 'أطروحة الاستثمار' },
  'inv.thesisBody': {
    en: 'Saudi Arabia is executing the world’s largest construction pipeline under Vision 2030. Every model, BOQ and RFI is a source of risk and cost. STRUX is the AI operating layer that sits on top of the existing BIM stack to eliminate rework, enforce Saudi compliance and accelerate delivery — a wedge into a vast, underserved market.',
    ar: 'تنفّذ السعودية أكبر محفظة إنشاءات في العالم ضمن رؤية 2030. كل نموذج وجدول كميات وطلب معلومات هو مصدر للمخاطر والتكلفة. STRUX هي طبقة التشغيل الذكية فوق منظومة BIM الحالية للقضاء على إعادة العمل وفرض الامتثال السعودي وتسريع التنفيذ — مدخل إلى سوق ضخم غير مخدوم.',
  },
  'inv.market': { en: 'Market Opportunity', ar: 'فرصة السوق' },
  'inv.tam': { en: 'TAM · Global construction tech', ar: 'السوق الكلي · تقنية الإنشاءات عالميًا' },
  'inv.sam': { en: 'SAM · GCC BIM & compliance', ar: 'السوق المتاح · BIM والامتثال بدول الخليج' },
  'inv.som': { en: 'SOM · KSA serviceable (3yr)', ar: 'السوق المستهدف · السعودية (3 سنوات)' },
  'inv.traction': { en: 'Traction & Unit Economics', ar: 'النمو واقتصاديات الوحدة' },
  'inv.arr': { en: 'Annual Recurring Revenue', ar: 'الإيراد السنوي المتكرر' },
  'inv.growth': { en: 'QoQ Growth', ar: 'النمو ربع السنوي' },
  'inv.pipeline': { en: 'Sales Pipeline', ar: 'خط المبيعات' },
  'inv.nrr': { en: 'Net Revenue Retention', ar: 'الاحتفاظ الصافي بالإيراد' },
  'inv.cac': { en: 'CAC Payback', ar: 'استرداد تكلفة الاستحواذ' },
  'inv.gross': { en: 'Gross Margin', ar: 'هامش الربح الإجمالي' },
  'inv.why': { en: 'Why STRUX wins', ar: 'لماذا تفوز STRUX' },
  'inv.raise': { en: 'The Raise', ar: 'جولة التمويل' },
  'inv.raiseBody': {
    en: 'Raising a Series A to expand the Saudi Compliance Engine, deepen Autodesk/Navisworks integrations and grow the GTM team across the Kingdom.',
    ar: 'نجمع جولة من الفئة A لتوسيع محرك الامتثال السعودي، وتعميق التكامل مع Autodesk/Navisworks، وتنمية فريق المبيعات في أنحاء المملكة.',
  },
  'inv.confidential': { en: 'Confidential — illustrative figures for demo purposes', ar: 'سرّي — أرقام توضيحية لأغراض العرض' },

  // Investor toggle (topbar)
  'mode.investorOn': { en: 'Investor Mode', ar: 'وضع المستثمر' },
}

export function translate(key: string, lang: Lang): string {
  const entry = dict[key]
  if (!entry) return key
  return entry[lang]
}
