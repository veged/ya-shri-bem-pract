({
    block: 'b-page',
    title: 'ШРИ £ маг',
    head: [
        { elem: 'css', url: '_store.css' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_store.js' }
    ],
    content: {
        block: 'product',
        title: 'Световой меч Классик N52–105',
        image: {
            block: 'illustration',
            mix: [{ block: 'product', elem: 'picture' }],
            content: [
                {
                    elem: 'image',
                    mods: { size: 'mid' },
                    src: 'n52-105-mid.jpg'
                },
                {
                    elem: 'zoom',
                    content: 'Большое изображение'
                }
            ]
        },
        content: [
            {
                elem: 'price',
                content: [
                    'Наша цена:',
                    {
                        elem: 'price-val',
                        content: [
                            '33&#160;700',
                            { block: 'cysign', mods: { type: 'rur' } }
                        ]
                    }
                ]
            },
            {
                block: 'button',
                mix: [{ block: 'product', elem: 'order-btn' }],
                content: 'Заказать'
            },
            {
                elem: 'info',
                content: [
                    { block: 'para', content: 'Хорошо держит форму, не мнется.' },
                    { block: 'para', content: 'Оригинальная упаковка.' },
                    { block: 'para', content: 'Галактика–производитель — Китай.' }
                ]
            },
            {
                elem: 'details',
                content: 'Характеристики:',
                params: [
                    { elem: 'param', key: 'Размер', value: 'S' },
                    { elem: 'param', key: 'Цвет', value: 'Хром' },
                    { elem: 'param', key: 'Скорость', value: '+5' },
                    { elem: 'param', key: 'Ловкость', value: '+10' },
                    { elem: 'param', key: 'Крутость', value: '+100' }
                ]
            }
        ]
    }
})
