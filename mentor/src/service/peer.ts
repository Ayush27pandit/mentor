
class PeerService{
    constructor(){
        if(!this.peer){
            this.peer=new RTCPeerConnection({
                iceServers:[
                    {
                        urls:[
                            "stun:stun.l.google.com:19302",
                            "stun.global.stun.twilio:3478"
                        ]
                    }
                ]
            })
        }
    }

    async getOffer(){
        if(this.peer){
            const offer=await this.peer.createOffer();
            await this.peer.setLocalDescription(new RTCSessionDescription(offer))
        }
    }
}

export default PeerService