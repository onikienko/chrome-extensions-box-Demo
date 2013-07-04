var storage = {
    // `sync` if you want. remember about QUOTAS https://developer.chrome.com/extensions/storage.html#sync-properties
    area: chrome.storage.local,
    default_options: {
        // one key for every option
        o_radio: 'radio3',
        o_select: 'select2',
        o_multiselect: ['multiselect1', 'multiselect3'],
        o_checkbox1: 1,
        o_text: 'text',
        o_textarea: 'textarea',
        o_range: 3,
        o_color: '#DF00DF',
        o_date: '',
        o_time: '',
        o_month: '',
        o_week: ''
    }
};