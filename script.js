let idioma = localStorage.getItem('idioma') || 'es'; // Intenta obtener el idioma desde localStorage o usa español por defecto

const textos = {
    es: {
        identificador: 'Es',
        descripcion: 'Desarrollador Web Front-End con una profunda pasión por las tecnologías modernas y el proceso de desarrollo web. Mi objetivo es crear experiencias de usuario atractivas, eficientes y accesibles mediante la implementación de las mejores prácticas y el uso de herramientas de vanguardia.',
        herramientas: 'Herramientas que utilizo: '
    },
    en: {
        identificador: 'En',
        descripcion: 'Front-End Web Developer with a deep passion for modern technologies and the web development process. My goal is to create engaging, efficient and accessible user experiences by implementing best practices and using cutting-edge tools.',
        herramientas: 'Tools I use: '
    },
    jp: {
        identificador: 'Jp',
        descripcion: '最新技術とウェブ開発プロセスへの深い情熱を持つフロントエンド・ウェブ開発者。私の目標は、ベストプラクティスを実践し、最先端のツールを使用することで、魅力的で効率的、かつアクセスしやすいユーザーエクスペリエンスを創造することです。',
        herramientas: '使っている道具: '
    }
};

function cambiarIdioma() {
    const identificadorIdioma = document.getElementById('identificadorIdioma');
    const descripcion = document.querySelector('.descripcion');
    const herramientas = document.getElementById('herramientas');

    // Cambiar el idioma
    const idiomaSeleccionado = textos[idioma];
    identificadorIdioma.textContent = idiomaSeleccionado.identificador;
    descripcion.textContent = idiomaSeleccionado.descripcion;
    herramientas.textContent = idiomaSeleccionado.herramientas;

    // Cambiar el idioma a la siguiente opción
    if (idioma === 'es') {
        idioma = 'en';
    } else if (idioma === 'en') {
        idioma = 'jp';
    } else {
        idioma = 'es';
    }

    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('idioma', idioma);
}
