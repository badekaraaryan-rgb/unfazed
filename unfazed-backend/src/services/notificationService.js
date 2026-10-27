// Stub integration boundary for email / WhatsApp. Events can later be pushed to a real queue.
async function notify(event,payload={}){console.info('[notification-queued]',JSON.stringify({event,payload,queuedAt:new Date().toISOString()}));return {queued:true,event}}
module.exports={notify};
