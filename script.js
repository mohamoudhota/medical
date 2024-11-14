const content = {
    1: `
        <h3>المستوى الأول: التمريض الأساسي</h3>
        <button class="accordion" onclick="togglePanel(this)">مقدمة إلى التمريض</button>
        <div class="panel">
            <p>مفهوم التمريض وأخلاقيات المهنة، أهمية التمريض في المجتمع.</p>
        </div>
        <button class="accordion" onclick="togglePanel(this)">القياسات الحيوية</button>
        <div class="panel">
            <p>تدريب على قياس درجة الحرارة، النبض، ضغط الدم، والتنفس.</p>
        </div>
        <!-- المزيد من الوحدات في المستوى الأول -->
    `,
    2: `
        <h3>المستوى الثاني: التمريض المتقدم</h3>
        <button class="accordion" onclick="togglePanel(this)">التعامل مع الألم وتوفير
