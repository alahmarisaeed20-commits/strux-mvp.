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
    en: 'The Intelligence Layer Above BIM',
    ar: 'طبقة الذكاء فوق نمذجة BIM',
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
  'common.issues': { en: 'issues', ar: 'ملاحظة' },
  'common.bimScore': { en: 'BIM score', ar: 'جودة النموذج' },
  'common.lastUpload': { en: 'Last upload', ar: 'آخر تحديث للنموذج' },
  'common.risk': { en: 'risk', ar: 'الخطورة' },
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
  'login.heroTitle1': { en: 'The Intelligence Layer', ar: 'طبقة الذكاء' },
  'login.heroTitle2': { en: 'Above BIM', ar: 'فوق نمذجة BIM' },
  'login.heroDesc': {
    en: 'STRUX is not a BIM viewer. It is an AI-powered Engineering Intelligence Platform that sits above Autodesk Revit, Navisworks and the IFC ecosystem — turning engineering data into executive decisions.',
    ar: 'STRUX ليست عارض نماذج BIM، بل منصة ذكاء هندسي مدعومة بالذكاء الاصطناعي تعمل فوق Autodesk Revit وNavisworks ومنظومة IFC، وتحوّل البيانات الهندسية إلى قرارات تنفيذية.',
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
  'dash.portfolioSub': { en: '18 active projects · 38 high-risk issues need attention this week.', ar: '18 مشروعًا نشطًا · 38 ملاحظة هندسية عالية الخطورة تستدعي المعالجة هذا الأسبوع.' },
  'dash.portfolioLive': { en: 'Portfolio Intelligence · Live', ar: 'ذكاء المحفظة · مباشر' },
  'dash.bimHealth': { en: 'BIM Health', ar: 'جودة نموذج BIM' },
  'dash.compliance': { en: 'Compliance', ar: 'الامتثال' },
  'kpi.totalIssues': { en: 'Total Issues', ar: 'إجمالي الملاحظات الهندسية' },
  'kpi.highRisk': { en: 'High Risk Issues', ar: 'الملاحظات عالية الخطورة' },
  'kpi.openRfis': { en: 'Open RFIs', ar: 'طلبات الاستفسار الهندسية المفتوحة' },
  'kpi.projects': { en: 'Active Projects', ar: 'المشاريع النشطة' },
  'kpi.reports': { en: 'Reports Generated', ar: 'التقارير المُنشأة' },
  'kpi.bimScore': { en: 'BIM Health Score', ar: 'مؤشر جودة نموذج BIM' },
  'kpi.complianceScore': { en: 'Compliance Score', ar: 'مؤشر الامتثال' },
  'kpi.highClashes': { en: 'High-Risk Clashes', ar: 'التعارضات عالية الخطورة' },
  'dash.trend': { en: 'Issue Resolution & Health Trend', ar: 'اتجاه معالجة الملاحظات وجودة النماذج' },
  'dash.trendSub': { en: 'Detected vs resolved over the last 8 weeks', ar: 'المرصودة مقابل المعالَجة خلال آخر 8 أسابيع' },
  'dash.byDiscipline': { en: 'Issues by Discipline', ar: 'الملاحظات حسب التخصص الهندسي' },
  'dash.severity': { en: 'Severity Breakdown', ar: 'توزيع درجات الخطورة' },
  'dash.projectStatus': { en: 'Project Status', ar: 'حالة المشاريع' },

  // Projects
  'proj.subtitle': { en: 'active projects · sorted by risk exposure', ar: 'مشاريع نشطة · مرتّبة حسب درجة التعرض للمخاطر' },
  'proj.uploadNew': { en: 'Upload New Model', ar: 'رفع نموذج جديد' },
  'proj.portfolioValue': { en: 'Portfolio Value', ar: 'قيمة المحفظة' },
  'proj.avgBim': { en: 'Avg BIM Score', ar: 'متوسط جودة النماذج' },
  'proj.openIssues': { en: 'Open Issues', ar: 'الملاحظات المفتوحة' },
  'proj.avgCompliance': { en: 'Avg Compliance', ar: 'متوسط الامتثال' },
  'proj.progress': { en: 'Project progress', ar: 'نسبة إنجاز المشروع' },
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
  'land.heroTitle1': { en: 'The Intelligence Layer', ar: 'طبقة الذكاء' },
  'land.heroTitle2': { en: 'Above BIM', ar: 'فوق نمذجة BIM' },
  'land.heroDesc': {
    en: 'STRUX is not a BIM viewer. It is an AI-powered Engineering Intelligence Platform that sits above Autodesk Revit, Navisworks and the IFC ecosystem — transforming engineering data into executive decisions through automated QA/QC, clash intelligence, Saudi compliance and executive reporting.',
    ar: 'STRUX ليست عارض نماذج BIM، بل منصة ذكاء هندسي مدعومة بالذكاء الاصطناعي تعمل فوق Autodesk Revit وNavisworks ومنظومة IFC — تحوّل البيانات الهندسية إلى قرارات تنفيذية عبر ضبط الجودة الآلي وذكاء التعارضات والامتثال السعودي والتقارير التنفيذية.',
  },
  'land.posBand': { en: 'STRUX is NOT a BIM Viewer.', ar: 'STRUX ليست عارض نماذج BIM.' },
  'land.ctaPrimary': { en: 'Launch Live Demo', ar: 'تشغيل العرض المباشر' },
  'land.ctaSecondary': { en: 'For Investors', ar: 'للمستثمرين' },
  'land.trusted': { en: 'Built for the Kingdom’s largest developers & giga-projects', ar: 'مصمم لأكبر المطورين والمشاريع العملاقة في المملكة' },
  'land.statModules': { en: 'Intelligence modules', ar: 'وحدات ذكاء' },
  'land.statDisciplines': { en: 'Engineering disciplines', ar: 'تخصصات هندسية' },
  'land.statCodes': { en: 'Saudi codes covered', ar: 'أكواد سعودية مغطّاة' },
  'land.statResidency': { en: 'KSA data residency', ar: 'استضافة البيانات داخل المملكة' },
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

  // ---- Positioning ----
  'pos.layer': { en: 'The Intelligence Layer Above BIM', ar: 'طبقة الذكاء فوق نمذجة BIM' },
  'pos.notViewer': {
    en: 'STRUX is not a BIM viewer. It is an AI-powered Engineering Intelligence Platform that sits above Autodesk Revit, Navisworks and the IFC ecosystem — turning engineering data into executive decisions.',
    ar: 'STRUX ليست عارض نماذج BIM، بل منصة ذكاء هندسي مدعومة بالذكاء الاصطناعي تعمل فوق Autodesk Revit وNavisworks ومنظومة IFC، وتحوّل البيانات الهندسية إلى قرارات تنفيذية.',
  },
  'pos.os': { en: 'The Operating System for Construction Intelligence', ar: 'نظام التشغيل للذكاء الهندسي في الإنشاءات' },
  'pos.constructionIntel': { en: 'Construction Intelligence', ar: 'الذكاء الهندسي للإنشاءات' },

  // ---- STRUX Intelligence Index ----
  'idx.name': { en: 'STRUX Intelligence Index™', ar: 'مؤشر STRUX للذكاء الهندسي™' },
  'idx.powered': { en: 'Powered by STRUX Intelligence Index™', ar: 'مدعوم بمؤشر STRUX للذكاء الهندسي™' },
  'idx.of': { en: 'out of 100', ar: 'من 100' },
  'idx.desc': {
    en: 'A composite score across compliance, quality, risk, cost and schedule.',
    ar: 'مؤشر مركّب يجمع الامتثال والجودة والمخاطر والتكلفة والجدول الزمني.',
  },
  'idx.compliance': { en: 'Compliance', ar: 'الامتثال' },
  'idx.quality': { en: 'Quality', ar: 'الجودة' },
  'idx.risk': { en: 'Risk', ar: 'المخاطر' },
  'idx.cost': { en: 'Cost', ar: 'التكلفة' },
  'idx.schedule': { en: 'Schedule', ar: 'الجدول الزمني' },

  // ---- Executive dashboard ----
  'nav.executive': { en: 'Executive', ar: 'لوحة القيادة التنفيذية' },
  'page.executive': { en: 'Executive Dashboard', ar: 'لوحة القيادة التنفيذية' },
  'exec.subtitle': { en: 'Board-level view of portfolio health, risk and financial exposure', ar: 'عرض على مستوى مجلس الإدارة لصحة المحفظة والمخاطر وحجم التعرض المالي' },
  'exec.portfolioHealth': { en: 'Portfolio Health', ar: 'صحة المحفظة' },
  'exec.financialExposure': { en: 'Financial Exposure', ar: 'حجم التعرض المالي' },
  'exec.reworkAvoided': { en: 'Rework Avoided (YTD)', ar: 'تكلفة إعادة العمل المتجنبة (حتى تاريخه)' },
  'exec.scheduleRisk': { en: 'Schedule at Risk', ar: 'الجدول الزمني المعرّض للخطر' },
  'exec.riskHeatmap': { en: 'Project Risk Heatmap', ar: 'الخريطة الحرارية لمخاطر المشاريع' },
  'exec.topRisks': { en: 'Top Portfolio Risks', ar: 'أبرز مخاطر المحفظة' },
  'exec.decisions': { en: 'Decisions Required', ar: 'قرارات مطلوبة' },
  'exec.financialByProject': { en: 'Financial Exposure by Project', ar: 'حجم التعرض المالي حسب المشروع' },
  // AI Executive Summary
  'exec.aiSummary': { en: 'AI Executive Summary', ar: 'الملخص التنفيذي الذكي' },
  'exec.status': { en: 'Portfolio Status', ar: 'حالة المحفظة' },
  'exec.healthy': { en: 'Healthy', ar: 'سليمة' },
  'exec.activeProjects': { en: 'Active Projects', ar: 'المشاريع النشطة' },
  'exec.criticalRisks': { en: 'Critical Risks', ar: 'المخاطر الحرجة' },
  'exec.potentialSavings': { en: 'Potential Savings', ar: 'الوفورات المحتملة' },
  'exec.aiRec': { en: 'Executive Insight', ar: 'توصية تنفيذية' },
  'exec.aiRecBody': {
    en: 'Resolve the coordination conflicts on Riyadh Mixed-Use Tower within 7 days to protect SAR 140K and 7 days of schedule float before shop-drawing approval.',
    ar: 'يُوصى بمعالجة تعارضات التنسيق في برج الرياض متعدد الاستخدامات خلال 7 أيام لحماية 140 ألف ريال و7 أيام من الفائض الزمني قبل اعتماد المخططات التنفيذية.',
  },

  // ---- Investor dashboard (Pre-Seed) ----
  'nav.investor': { en: 'Investor', ar: 'لوحة المستثمر' },
  'page.investor': { en: 'Investor Dashboard', ar: 'لوحة المستثمر' },
  'inv.subtitle': {
    en: 'Pre-Seed opportunity — the intelligence layer above BIM for Saudi construction.',
    ar: 'فرصة في مرحلة ما قبل التأسيس — طبقة الذكاء فوق نمذجة BIM لقطاع الإنشاءات السعودي.',
  },
  'inv.stageBadge': { en: 'Pre-Seed · Raising SAR 7M', ar: 'ما قبل التأسيس · جولة بقيمة 7 ملايين ريال' },
  'inv.confidential': { en: 'Confidential — illustrative figures, Pre-Seed stage', ar: 'وثيقة سرّية — أرقام توضيحية، مرحلة ما قبل التأسيس' },

  // 1 Problem
  'inv.problemTag': { en: '01 · The Problem', ar: '01 · المشكلة' },
  'inv.problemTitle': { en: 'Engineering data hides expensive, avoidable risk', ar: 'البيانات الهندسية تُخفي مخاطر مكلفة يمكن تفاديها' },
  'inv.problemDesc': {
    en: 'Saudi construction runs on Revit, Navisworks and IFC models that no executive can read at scale. Cost overruns, coordination failures, BIM governance gaps, rework and compliance exposure stay invisible until they become change orders and delays. The data exists — the intelligence layer does not.',
    ar: 'يعتمد قطاع الإنشاءات السعودي على نماذج Revit وNavisworks وIFC التي يصعب على الإدارة قراءتها على نطاق واسع. تبقى تجاوزات التكلفة وإخفاقات التنسيق وفجوات حوكمة BIM وإعادة العمل ومخاطر الامتثال غير مرئية حتى تتحول إلى أوامر تغيير وتأخيرات. البيانات موجودة — لكن طبقة الذكاء غائبة.',
  },
  'inv.stat1': { en: 'Rework consumes up to 5–15% of total construction costs.', ar: 'تستهلك إعادة العمل ما يصل إلى 5–15% من إجمالي تكاليف الإنشاء.' },
  'inv.stat2': { en: 'Every BIM model, BOQ and specification document contains hidden risks.', ar: 'كل نموذج BIM وجدول كميات ووثيقة مواصفات يحتوي على مخاطر خفية.' },

  // 2 Solution
  'inv.solutionTag': { en: '02 · The Solution', ar: '02 · الحل' },
  'inv.solutionTitle': { en: 'STRUX transforms BIM models into actionable engineering intelligence.', ar: 'تُحوّل STRUX نماذج BIM إلى ذكاء هندسي قابل للتنفيذ.' },
  'inv.solOS': { en: 'The Operating System for Construction Intelligence', ar: 'نظام التشغيل للذكاء الهندسي في الإنشاءات' },

  // 3 Why now
  'inv.whyNowTag': { en: '03 · Why Now', ar: '03 · لماذا الآن' },
  'inv.whyNowTitle': { en: 'A rare alignment of demand, regulation and technology', ar: 'تقاطع نادر بين الطلب والتنظيم والتقنية' },
  'inv.whyNowClose': { en: 'The market is ready now in a way it was not five years ago.', ar: 'السوق جاهز الآن بشكل لم يكن عليه قبل خمس سنوات.' },

  // 4 Market
  'inv.marketTag': { en: '04 · Market Opportunity', ar: '04 · فرصة السوق' },
  'inv.market': { en: 'Market Opportunity', ar: 'فرصة السوق' },
  'inv.tam': { en: 'TAM · GCC construction technology', ar: 'السوق الكلي · تقنية الإنشاءات الخليجية' },
  'inv.sam': { en: 'SAM · KSA BIM & compliance software', ar: 'السوق المتاح · برمجيات BIM والامتثال في السعودية' },
  'inv.som': { en: 'SOM · Serviceable in 3 years', ar: 'السوق القابل للاستحواذ · خلال 3 سنوات' },
  'inv.marketNote': { en: 'Bottom-up estimates for KSA & GCC construction technology — deliberately conservative, not top-down.', ar: 'تقديرات تصاعدية لتقنية الإنشاءات في السعودية والخليج — محافظة عن قصد وليست تنازلية.' },

  // 5 Customer journey
  'inv.journeyTag': { en: '05 · Product in Action', ar: '05 · المنتج أثناء العمل' },
  'inv.journeyTitle': { en: 'A day with STRUX', ar: 'يوم مع STRUX' },
  'inv.journeySub': { en: 'How a BIM manager and a project director use STRUX on a live Riyadh tower.', ar: 'كيف يستخدم مدير BIM ومدير المشروع منصة STRUX في برج قائم بالرياض.' },

  // 6 Technology architecture
  'inv.techTag': { en: '06 · Technology Architecture', ar: '06 · البنية التقنية' },
  'inv.techTitle': { en: 'An intelligence layer, not another viewer', ar: 'طبقة ذكاء، لا عارض آخر' },
  'inv.techSub': { en: 'STRUX ingests the existing BIM stack and adds intelligence above it — vendor-neutral and KSA-hosted.', ar: 'تستوعب STRUX منظومة BIM الحالية وتضيف الذكاء فوقها — محايدة تجاه المورّد ومستضافة داخل المملكة.' },
  'inv.layerApp': { en: 'Executive Intelligence', ar: 'الذكاء التنفيذي' },
  'inv.layerAppItems': { en: 'Dashboards · Smart Reports · Copilot · Intelligence Index™', ar: 'لوحات القيادة · التقارير الذكية · المساعد الذكي · مؤشر الذكاء™' },
  'inv.layerEngine': { en: 'STRUX Intelligence Engine', ar: 'محرك STRUX للذكاء' },
  'inv.layerEngineItems': { en: 'AI Risk Detection · Clash Intelligence · Quantity AI · Saudi Compliance Engine', ar: 'كشف المخاطر · ذكاء التعارضات · ذكاء الكميات · محرك الامتثال السعودي' },
  'inv.layerIngest': { en: 'Ingestion & Normalization', ar: 'الاستيعاب والتوحيد' },
  'inv.layerIngestItems': { en: 'IFC / Revit parser · BOQ & specification reader · element graph', ar: 'محلّل IFC/Revit · قارئ جداول الكميات والمواصفات · رسم بياني للعناصر' },
  'inv.layerData': { en: 'Existing BIM Stack (inputs)', ar: 'منظومة BIM الحالية (المدخلات)' },
  'inv.techResidency': { en: 'KSA cloud · PDPL & SDAIA aligned · vendor-neutral', ar: 'سحابة داخل المملكة · متوافقة مع نظام حماية البيانات وسدايا · محايدة تجاه المورّد' },

  // 7 Business model
  'inv.bmTag': { en: '07 · Business Model', ar: '07 · نموذج العمل' },
  'inv.bmTitle': { en: 'Recurring, high-margin SaaS — built to compound', ar: 'برمجيات متكررة عالية الهامش — مبنية للنمو المتراكم' },
  'inv.bmRecurring': { en: 'Recurring-led model (target)', ar: 'نموذج يقوده الإيراد المتكرر (مستهدف)' },

  // 8 Financial projections
  'inv.projTag': { en: '08 · Financial Projections', ar: '08 · التوقعات المالية' },
  'inv.projTitle': { en: 'Illustrative 3-year plan', ar: 'خطة توضيحية لثلاث سنوات' },
  'inv.projBadge': { en: 'Projections — pre-revenue, illustrative', ar: 'توقعات — قبل تحقيق الإيراد، توضيحية' },
  'inv.projNote': {
    en: 'Forward-looking projections only, not actuals or commitments. STRUX is pre-revenue at Pre-Seed; figures illustrate the operating plan this round funds.',
    ar: 'توقعات مستقبلية فقط، وليست أرقامًا فعلية أو التزامات. STRUX قبل مرحلة الإيراد في جولة ما قبل التأسيس؛ والأرقام توضّح خطة التشغيل التي تموّلها هذه الجولة.',
  },
  'inv.projCustomers': { en: 'Paying customers', ar: 'العملاء المدفوعون' },
  'inv.projArr': { en: 'Projected ARR', ar: 'الإيراد السنوي المتكرر المتوقع' },

  // 9 Competitive advantage
  'inv.compTag': { en: '09 · Competitive Advantage', ar: '09 · الميزة التنافسية' },
  'inv.compTitle': { en: 'Where STRUX is structurally different', ar: 'أين تختلف STRUX جوهريًا' },
  'inv.colTraditional': { en: 'Traditional Consultancy', ar: 'الاستشارات التقليدية' },

  // 10 Moat
  'inv.moatTag': { en: '10 · Defensibility & Moat', ar: '10 · الحصانة التنافسية' },
  'inv.moatTitle': { en: 'Defensibility & Competitive Moat', ar: 'الحصانة والميزة التنافسية الدفاعية' },
  'inv.moatHeadline': { en: 'The more projects STRUX analyzes, the smarter it becomes.', ar: 'كلما حلّلت STRUX مشاريع أكثر، أصبحت أكثر ذكاءً.' },

  // 11 Why incumbents can't replicate
  'inv.replicateTag': { en: '11 · Defensibility vs Incumbents', ar: '11 · الحصانة أمام المنافسين الكبار' },
  'inv.replicateTitle': { en: 'Why Autodesk can’t easily replicate STRUX', ar: 'لماذا يصعب على Autodesk تكرار STRUX' },

  // 12 Index section
  'inv.indexTag': { en: '12 · Signature Metric', ar: '12 · المؤشر المميّز' },
  'inv.indexTitle': { en: 'The STRUX Intelligence Index™', ar: 'مؤشر STRUX للذكاء الهندسي™' },

  // 13 Why STRUX wins
  'inv.winTag': { en: '13 · Why STRUX Wins', ar: '13 · لماذا تفوز STRUX' },
  'inv.winTitle': { en: 'Why STRUX wins', ar: 'لماذا تفوز STRUX' },

  // 14 Product roadmap
  'inv.prodRoadTag': { en: '14 · Product Roadmap', ar: '14 · خارطة طريق المنتج' },
  'inv.prodRoadTitle': { en: 'Product Roadmap', ar: 'خارطة طريق المنتج' },
  'inv.phaseNow': { en: 'Now (0–6 months)', ar: 'الآن (0–6 أشهر)' },
  'inv.phaseNext': { en: 'Next (6–12 months)', ar: 'التالي (6–12 شهرًا)' },
  'inv.phaseLater': { en: 'Later (12–24 months)', ar: 'لاحقًا (12–24 شهرًا)' },

  // 15 Fundraising
  'inv.fundTag': { en: '15 · The Round', ar: '15 · الجولة' },
  'inv.fundTitle': { en: 'Current Round — Pre-Seed', ar: 'الجولة الحالية — ما قبل التأسيس' },
  'inv.round': { en: 'Pre-Seed', ar: 'ما قبل التأسيس' },
  'inv.currentRound': { en: 'Current Round', ar: 'الجولة الحالية' },
  'inv.target': { en: 'Target Raise', ar: 'المبلغ المستهدف' },
  'inv.useOfFunds': { en: 'Use of Funds', ar: 'أوجه استخدام التمويل' },
  'inv.runway': { en: 'Runway', ar: 'المدى التشغيلي' },
  'inv.runwayValue': { en: '18–24 month runway', ar: 'مدى تشغيلي من 18 إلى 24 شهرًا' },

  // 16 Roadmap
  'inv.roadmapTag': { en: '16 · Funding Roadmap', ar: '16 · خارطة طريق التمويل' },
  'inv.roadmapTitle': { en: 'Future Funding Roadmap', ar: 'خارطة طريق التمويل المستقبلية' },
  'inv.stagePre': { en: 'Pre-Seed', ar: 'ما قبل التأسيس' },
  'inv.stageSeed': { en: 'Seed', ar: 'التأسيس' },
  'inv.stageA': { en: 'Series A', ar: 'الجولة الأولى (A)' },
  'inv.current': { en: 'Current', ar: 'الحالية' },
  'inv.seedMilestones': { en: 'Seed Milestones', ar: 'مستهدفات جولة التأسيس' },

  // Investor toggle (topbar)
  'mode.investorOn': { en: 'Investor Mode', ar: 'وضع المستثمر' },
  'mode.demo': { en: 'Investor Demo', ar: 'عرض المستثمر' },
  'mode.demoBanner': {
    en: 'Investor Demo Mode — illustrative figures, narrated highlights enabled.',
    ar: 'وضع عرض المستثمر — أرقام توضيحية مع إبراز النقاط الرئيسية.',
  },

  // ---- STRUX Copilot ----
  'cp.name': { en: 'STRUX Copilot', ar: 'مساعد STRUX الذكي' },
  'cp.subtitle': { en: 'AI engineering analyst', ar: 'محلّل هندسي بالذكاء الاصطناعي' },
  'cp.open': { en: 'Ask STRUX Copilot', ar: 'اسأل مساعد STRUX' },
  'cp.placeholder': { en: 'Ask about projects, risks, compliance…', ar: 'اسأل عن المشاريع أو المخاطر أو الامتثال…' },
  'cp.greeting': {
    en: "Hi — I'm STRUX Copilot. Ask me about your portfolio: risks, clashes, Saudi compliance, financial exposure, or ask me to generate an executive report.",
    ar: 'مرحبًا — أنا مساعد STRUX الذكي. اسألني عن محفظتك: المخاطر، التعارضات، الامتثال السعودي، حجم التعرض المالي، أو اطلب مني إعداد تقرير تنفيذي.',
  },

  // ---- Analysis · Overview ----
  'ov.bimHealth': { en: 'BIM Health Score', ar: 'مؤشر جودة نموذج BIM' },
  'ov.bimHealthDesc': { en: 'Strong. Coordination is the main pull-down factor.', ar: 'جيد. التنسيق هو العامل الأبرز في خفض المؤشر.' },
  'ov.qaqcStatus': { en: 'QA/QC Status', ar: 'حالة ضبط الجودة' },
  'ov.failed': { en: 'failed', ar: 'غير مجتازة' },
  'ov.warnings': { en: 'warnings', ar: 'تحذيرات' },
  'ov.passedOf': { en: 'passed of', ar: 'مجتازة من' },
  'ov.checks': { en: 'checks', ar: 'فحوصات' },
  'ov.clashExposure': { en: 'Clash Exposure', ar: 'التعرض من التعارضات' },
  'ov.critical': { en: 'critical', ar: 'حرجة' },
  'ov.activeClashes': { en: 'active clashes', ar: 'تعارضات نشطة' },
  'ov.compliance': { en: 'Saudi Compliance', ar: 'الامتثال السعودي' },
  'ov.atRisk1': { en: '3 areas at risk · 1 critical violation', ar: '3 مناطق معرّضة للخطر · مخالفة حرجة واحدة' },
  'ov.profile': { en: 'Model Intelligence Profile', ar: 'ملف الذكاء الخاص بالنموذج' },
  'ov.profileSub': { en: 'Six-axis assessment of the federated model', ar: 'تقييم سداسي المحاور للنموذج الموحّد' },
  'ov.funnel': { en: 'Clash Resolution Funnel', ar: 'مسار معالجة التعارضات' },
  'ov.funnelSub': { en: 'Lifecycle of detected clashes', ar: 'دورة حياة التعارضات المرصودة' },
  'ov.detected': { en: 'Detected', ar: 'مرصودة' },
  'ov.coordinated': { en: 'Coordinated', ar: 'قيد التنسيق' },
  'ov.resolved': { en: 'Resolved', ar: 'معالَجة' },
  'ov.snapshot': { en: 'Saudi Compliance Snapshot', ar: 'لمحة عن الامتثال السعودي' },
  'ov.aiSummary': { en: 'STRUX AI Summary', ar: 'ملخص STRUX الذكي' },
  'ov.aiBody1': {
    en: 'The model is in good health (94%). The single most impactful action is fixing the 1.25 m coordinate offset on the architectural model — it will reduce false clashes and improve downstream accuracy.',
    ar: 'النموذج في حالة جيدة (94%). والإجراء الأكثر تأثيرًا هو معالجة انزياح الإحداثيات البالغ 1.25 م في النموذج المعماري — فهو يقلّل التعارضات الزائفة ويحسّن دقة المخرجات اللاحقة.',
  },
  'ov.aiBody2': {
    en: 'Two Critical items — CL-1090 (wall penetration) and CV-01 (fire-exit distance) — carry the highest risk and should be closed before shop-drawing approval.',
    ar: 'بندان حرجان — CL-1090 (اختراق الجدار) وCV-01 (مسافة مخرج الطوارئ) — يحملان أعلى مخاطرة ويجب إغلاقهما قبل اعتماد المخططات التنفيذية.',
  },
  'ov.axisQuality': { en: 'Model Quality', ar: 'جودة النموذج' },
  'ov.axisCoord': { en: 'Coordination', ar: 'التنسيق' },
  'ov.axisCompliance': { en: 'Compliance', ar: 'الامتثال' },
  'ov.axisData': { en: 'Data Richness', ar: 'ثراء البيانات' },
  'ov.axisQty': { en: 'Quantity Match', ar: 'تطابق الكميات' },
  'ov.axisDocs': { en: 'Documentation', ar: 'التوثيق' },

  // ---- Analysis · QA/QC ----
  'qa.passed': { en: 'Checks Passed', ar: 'فحوصات مجتازة' },
  'qa.warnings': { en: 'Warnings', ar: 'تحذيرات' },
  'qa.failed': { en: 'Failed', ar: 'غير مجتازة' },
  'qa.title': { en: 'QA/QC Validation Checklist', ar: 'قائمة فحوصات ضبط الجودة والتحقق' },
  'qa.sub': { en: 'Automated model-hygiene checks against the project BIM Execution Plan', ar: 'فحوصات آلية لنظافة النموذج وفق خطة تنفيذ BIM للمشروع' },
  'qa.affected': { en: 'elements affected', ar: 'عنصرًا متأثرًا' },
  'qa.assigned': { en: 'Assigned', ar: 'مُسند إلى' },

  // ---- Analysis · Clash ----
  'cl.active': { en: 'Active Clashes', ar: 'التعارضات النشطة' },
  'cl.criticalPriority': { en: 'Critical Priority', ar: 'ذات أولوية حرجة' },
  'cl.estCost': { en: 'Est. Cost Impact', ar: 'الأثر المالي المقدّر' },
  'cl.potentialDelay': { en: 'Potential Delay', ar: 'التأخير المحتمل' },
  'cl.register': { en: 'Clash Intelligence Register', ar: 'سجل ذكاء التعارضات' },
  'cl.registerSub': { en: 'AI-prioritised by cost, schedule and constructability impact', ar: 'مرتّبة بالذكاء الاصطناعي حسب الأثر على التكلفة والجدول وقابلية التنفيذ' },
  'cl.colId': { en: 'Clash ID', ar: 'رقم التعارض' },
  'cl.colConflict': { en: 'Conflict', ar: 'التعارض' },
  'cl.colDisc': { en: 'Disciplines', ar: 'التخصصات' },
  'cl.colCost': { en: 'Cost Impact', ar: 'الأثر المالي' },
  'cl.colDelay': { en: 'Delay', ar: 'التأخير' },
  'cl.days': { en: 'days', ar: 'أيام' },

  // ---- Analysis · Compliance ----
  'cmp.overall': { en: 'Saudi Compliance Engine', ar: 'محرك الامتثال السعودي' },
  'cmp.overallSub': { en: 'Benchmarked against SBC, Civil Defense, Accessibility, Municipality and Energy codes.', ar: 'مقارنة بأكواد البناء السعودي والدفاع المدني وإمكانية الوصول والبلديات والطاقة.' },
  'cmp.compliantN': { en: 'Compliant', ar: 'ملتزم' },
  'cmp.atRiskN': { en: 'At Risk', ar: 'معرّض للخطر' },
  'cmp.byArea': { en: 'Compliance by Regulatory Area', ar: 'الامتثال حسب المجال التنظيمي' },
  'cmp.checksPassed': { en: 'checks passed', ar: 'فحص مجتاز' },
  'cmp.violations': { en: 'Detected Violations', ar: 'المخالفات المرصودة' },
  'cmp.violationsSub': { en: 'Regulatory gaps requiring resolution before authority submission', ar: 'فجوات تنظيمية تستلزم المعالجة قبل التقديم للجهات' },
  'cmp.finding': { en: 'Finding', ar: 'النتيجة' },
  'cmp.overallLabel': { en: 'Overall', ar: 'الإجمالي' },

  // ---- Analysis · Quantity ----
  'qt.extracted': { en: 'Line Items Extracted', ar: 'بنود مستخرجة' },
  'qt.within': { en: 'Within ±5%', ar: 'ضمن ±5%' },
  'qt.highRisk': { en: 'High-Risk Variance', ar: 'فروقات عالية الخطورة' },
  'qt.confidence': { en: 'Take-off Confidence', ar: 'موثوقية الحصر' },
  'qt.compare': { en: 'Model Quantity vs BOQ Quantity', ar: 'كمية النموذج مقابل كمية جدول الكميات' },
  'qt.compareSub': { en: 'Normalised comparison across major take-off items', ar: 'مقارنة موحّدة عبر بنود الحصر الرئيسية' },
  'qt.takeoff': { en: 'Quantity Take-off & Variance', ar: 'حصر الكميات والفروقات' },
  'qt.takeoffSub': { en: 'Extracted from model geometry, reconciled against the BOQ', ar: 'مستخرجة من هندسة النموذج ومطابقة مع جدول الكميات' },
  'qt.colItem': { en: 'Item', ar: 'البند' },
  'qt.colUnit': { en: 'Unit', ar: 'الوحدة' },
  'qt.colModel': { en: 'Model Qty', ar: 'كمية النموذج' },
  'qt.colBoq': { en: 'BOQ Qty', ar: 'كمية الجدول' },
  'qt.colVar': { en: 'Variance', ar: 'الفرق' },
  'qt.colRisk': { en: 'Risk', ar: 'الخطورة' },

  // ---- Analysis · RFI ----
  'rf.issue': { en: 'Issue RFI', ar: 'إصدار الطلب' },
  'rf.edit': { en: 'Edit Draft', ar: 'تعديل المسودة' },
  'rf.export': { en: 'Export PDF', ar: 'تصدير PDF' },
  'rf.subject': { en: 'Subject', ar: 'الموضوع' },
  'rf.question': { en: 'Question', ar: 'السؤال' },
  'rf.suggestedAtt': { en: 'Suggested Attachment', ar: 'المرفق المقترح' },
  'rf.source': { en: 'Source', ar: 'المصدر' },
  'rf.raisedBy': { en: 'Raised By', ar: 'صادر عن' },
  'rf.autogen': { en: 'auto-generated', ar: 'مولّد تلقائيًا' },

  // ---- Analysis · Executive report ----
  'er.subtitle': { en: 'Executive Smart Report · auto-generated by STRUX AI', ar: 'التقرير التنفيذي الذكي · مولّد تلقائيًا بواسطة STRUX AI' },
  'er.print': { en: 'Print', ar: 'طباعة' },
  'er.confidential': { en: 'Confidential', ar: 'سرّي' },
  'er.executiveReport': { en: 'Executive Intelligence Report', ar: 'تقرير الذكاء التنفيذي' },
  'er.openIssues': { en: 'open issues', ar: 'ملاحظة مفتوحة' },
  'er.highRiskN': { en: 'high-risk', ar: 'عالية الخطورة' },
  'er.criticalN': { en: 'critical', ar: 'حرجة' },
  'er.finExposure': { en: 'Financial Exposure', ar: 'حجم التعرض المالي' },
  'er.potentialDelay': { en: 'Potential Delay', ar: 'التأخير المحتمل' },
  'er.s1': { en: '1 · Project Summary', ar: '1 · ملخص المشروع' },
  'er.s2': { en: '2 · Top 10 Issues by Risk', ar: '2 · أعلى 10 ملاحظات حسب الخطورة' },
  'er.s3': { en: '3 · Recommended Actions', ar: '3 · الإجراءات الموصى بها' },
  'er.s4': { en: '4 · Executive Decision Summary', ar: '4 · ملخص القرار التنفيذي' },
  'er.colRef': { en: 'Ref', ar: 'المرجع' },
  'er.colIssue': { en: 'Issue', ar: 'الملاحظة' },
  'er.colImpact': { en: 'Impact', ar: 'الأثر' },
  'er.recProceed': { en: 'Recommendation: Proceed (conditional)', ar: 'التوصية: المتابعة (مشروطة)' },
  'er.footer': {
    en: 'Generated by STRUX — The Intelligence Layer Above BIM · Data hosted in KSA · This document contains illustrative prototype data.',
    ar: 'مُولّد بواسطة STRUX — طبقة الذكاء فوق نمذجة BIM · البيانات مستضافة داخل المملكة · تحتوي هذه الوثيقة على بيانات نموذج أولي توضيحية.',
  },

  // Loading
  'load.tagline': { en: 'Initializing engineering intelligence…', ar: 'جارٍ تهيئة الذكاء الهندسي…' },
}

export function translate(key: string, lang: Lang): string {
  const entry = dict[key]
  if (!entry) return key
  return entry[lang]
}
