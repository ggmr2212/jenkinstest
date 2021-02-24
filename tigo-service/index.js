const service = require('restana')()

service.get('v1/debts', (req, res) => res.send('Hello this is a response from third party service'))
service.post('v1/payments', (req, res) => res.send('Hello this is a response from third party service'))
service.get('v1/documents', (req, res) => res.send('Hello this is a response from third party service'))
service.post('v1/payments/reverse', (req, res) => res.send('Hello this is a response from third party service'))

service.start(3001)