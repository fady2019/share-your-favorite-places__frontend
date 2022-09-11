export interface AlertI {
    isOpen: boolean;
    header: any;
    message: any;
    onClose: (confirmation: boolean) => any;
}
