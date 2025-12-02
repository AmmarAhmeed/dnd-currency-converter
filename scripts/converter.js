const currencyChart = {
    cp: {
        cp: 1,
        sp: .10,
        gp: (1/100),
        pp: (1/1000)
    },
    sp: {
        cp: 10,
        sp: 1,
        gp: .10,
        pp: 1/100
    },
    gp: {
        cp: 100,
        sp: 10,
        gp: 1,
        pp: .10
    },
    pp: {
        cp: 1000,
        sp: 100,
        gp: 10,
        pp: 1
    },
}

$(document).ready(function() {
    $('input[type=number]').keyup(e => {
        const val = $(e.currentTarget).val();
        const field = $(e.currentTarget).attr('id');
        const converted = calculate(val, field);
        $('input[type=number]').each((v, i, a) => {
            const calculatedField = $(i).attr('id');
            if (field !== calculatedField) {
                $(`#${calculatedField}`).val(converted[calculatedField]);
            }
        })
    })
});

calculate = (val, field) => {
    const converted = {};
    Object.keys(currencyChart[field]).forEach((v,i,a) => {
        converted[v] = Math.floor(currencyChart[field][v] * val);
    })
    return converted;
}