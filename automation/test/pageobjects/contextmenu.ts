import Page from "./Page";
class Contextmenu extends Page{

    public open(){
    return super.open('/context_menu');
    }
}
export default new Contextmenu();