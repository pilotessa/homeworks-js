'use strict';

function Role(name, capabilities) {
    this.name = name || '';
    this.capabilities = capabilities || [];
}

Role.prototype = {
    name: '',
    capabilities: [],

    can: function (action) {
        for (var i in this.capabilities) {
            if (this.capabilities[i].name == action) {
                return this.capabilities[i].allowed;
            }
        }

        return false;
    }
};