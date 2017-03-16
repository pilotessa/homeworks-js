'use strict';

function Capability(name, allowed) {
    this.name = name || '';
    this.allowed = allowed === undefined ? true : allowed;
}

Capability.prototype = {
    name: '',
    allowed: true
};