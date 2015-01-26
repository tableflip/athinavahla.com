var keystone = require("keystone")
var Types = keystone.Field.Types

var Quote = new keystone.List('Quote', {
  map: { name: 'info' },
  defaultSort: '-createdAt'
})

Quote.add({
  quote: { type: Types.Text, required: true, initial: true, default: ""},
  info: { type: Types.Text, required: true, initial: true, default: ""},
  createdAt: { type: Types.Date, default: Date.now },
  published: { type: Types.Boolean, default: true }
})

Quote.register()