import HTTP from './http';

class APIList {
	constructor() { }

	getConfiguration(){
		return HTTP.GET("configurations");
	}
	getTranslationList(params){
		return HTTP.POST("translations",params);
	}
	userAuthLogin(params) {
		return HTTP.POST("login", params);
	}
	forgotPassword(params) {
		return HTTP.POST("forgot-password", params);
	}
	changePassword(params) {
		return HTTP.POST("change-password", params);
	}
	signUpAction(params) {
		return HTTP.POST("register", params);
	}
	userValidate(params) {
		return HTTP.POST("validate", params);
	}
	updateProfile(params){
		return HTTP.POST("update-profile",params);
	}
	getProfile(){
		return HTTP.GET("profile");
	}
	getGalleryImages(){
		return HTTP.GET("gallery");
	}
	storeGalleryImages(params){
		return HTTP.POST("gallery/store",params);

	}
	deleteGalleryImages(params){
		return HTTP.POST("gallery/delete",params);

	}
	mackTrip(params){
		return HTTP.POST("store-trip",params);
	}
	// getBookingList(){
	// 	return HTTP.POST("");
	// }
		// getBookingDetail(params){
	// 	return HTTP.POST("" ,params);
	// }
	getDocumentAction(){
		return HTTP.GET("documents");
	}
	documentStoreAction(params){
		return HTTP.POST("document/store",params);
	}
	geCmsPage(params){
		return HTTP.POST("page",params); 
	}
	///
	
	

	
}

export default new APIList();
