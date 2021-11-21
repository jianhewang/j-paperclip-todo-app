import header from "../header";
import tagline from "~/src/js/components/ui/tagline";

const brandingHeader = function(){
    const brandHeaderContainer = document.createElement('div');
    brandHeaderContainer.classList.add('brand-head');

    brandHeaderContainer.append(header('Paperclip', 'branding-header'));
    brandHeaderContainer.append(tagline('Listen better. Plan better. Build better.'));

    return brandHeaderContainer
}

export default brandingHeader