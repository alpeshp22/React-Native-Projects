export class AlertHelper {
	static dropDown;
	static onClose;

	static setDropDown(dropDown) {
		this.dropDown = dropDown;
	}

	static success(message) {
		this.show('success', 'Success', message);
    }
    
	static error(message) {
		this.show('error', 'Error', message);
	}
	
	static warning(message) {
		this.show('warn', 'Warning', message);
    }
    
    static info(title, message) {
		this.show('info', title, message);
    }
    
	static show(type, title, message) {
		if (this.dropDown) {
			if (type === 'warn') {
				type = 'error';
			}
			if(typeof message === 'object')
			{
				this.dropDown.alertWithType(type, message.title, message.message);
			}
			else
			{
				this.dropDown.alertWithType(type, title, message);
			}
		}
	}

	static setOnClose(onClose) {
		this.onClose = onClose;
	}

	static invokeOnClose() {
		if (typeof this.onClose === 'function') {
			this.onClose();
		}
	}
}
