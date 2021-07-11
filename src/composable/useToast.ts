import { h, ref, resolveComponent } from "vue";

const stackMessage = ref([])

interface Message {
    summary: string;
    detail?: string;
    variant?: string;
    closable?: boolean;
    position?: string;
}

export default function useToas() {
    const toastWrapper = document.getElementById('toast')
    
    return {
        add: (message: Message) => {
            const ToastComponent = resolveComponent('Toast')
            return () => h(ToastComponent, [message.summary, message.detail, message.variant, message.position, message.position])
        }
    }
}