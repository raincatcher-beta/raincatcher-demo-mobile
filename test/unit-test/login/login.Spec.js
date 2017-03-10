describe('LoginCtrl', function() {
    var deferredLogin;
    var userClientMock;
    var controller;
    var rootScope;

    beforeEach(module('wfm-mobile'));

    beforeEach(inject(function($q, $rootScope) {
        deferredLogin = $q.defer();
        userClientMock = {
            auth: jasmine.createSpy('auth').and.returnValue(deferredLogin.promise)
        };
        rootScope = $rootScope;
    }));

    describe('Create Controller with Session #', function(){
        beforeEach(inject(function($controller){
            userClientMock.hasSession = jasmine.createSpy('hasSession spy').and.returnValue(true);
            controller = $controller('LoginCtrl', {
                'userClient' : userClientMock,
                'hasSession' : userClientMock.hasSession()
            });
        }));

        it('Should have call to hasSession', function() {
            expect(controller.hasSession).toBe(true);
        });

        it('Auth should have been called with valid login', function(){
            controller.username = 'user';
            controller.password = 'password';

            controller.login(true);
            expect(userClientMock.auth).toHaveBeenCalledWith('user', 'password');
        });
        
        it('The login has been made correcly', function(){
            controller.login(true);
            deferredLogin.resolve();
            rootScope.$digest();

            expect(controller.loginMessages.success).toBe(true);
            expect(controller.loginMessages.error).toBe(false);
        });

        it('The login fails', function() {
            controller.login(true);
            deferredLogin.reject();
            rootScope.$digest();
            expect(controller.loginMessages.success).toBe(false);
            expect(controller.loginMessages.error).toBe(true);
        }); 

        it('The login form is not valid', function() {
            controller.login(false);
            deferredLogin.reject();
            rootScope.$digest();
            expect(controller.loginMessages.success).toBe(false);
            expect(controller.loginMessages.error).toBe(false);
        });
        
    });

    describe('Create Controller without Session #', function(){
        beforeEach(inject(function($controller){
            userClientMock.hasSession = jasmine.createSpy('hasSession spy').and.returnValue(false);
            controller = $controller('LoginCtrl', {
                'userClient' : userClientMock,
                'hasSession' : userClientMock.hasSession()
            });
        }));

        it('Should have call to hasSession', function() {
            expect(controller.hasSession).toBe(false);
        });

        it('Auth should have been called with valid login', function(){
            controller.username = 'Mikel';
            controller.password = 'mikel';

            controller.login(true);
            expect(userClientMock.auth).toHaveBeenCalledWith('Mikel', 'mikel');
        });
        
        it('The login has been made correcly', function(){
            controller.login(true);
            deferredLogin.resolve();
            rootScope.$digest();

            expect(controller.loginMessages.success).toBe(true);
            expect(controller.loginMessages.error).toBe(false);
        });

        it('The login fails', function() {
            controller.login(true);
            deferredLogin.reject();
            rootScope.$digest();
            expect(controller.loginMessages.success).toBe(false);
            expect(controller.loginMessages.error).toBe(true);
        });

        it('The login form is not valid', function() {
            controller.login(false);
            deferredLogin.reject();
            rootScope.$digest();
            expect(controller.loginMessages.success).toBe(false);
            expect(controller.loginMessages.error).toBe(false);
        });
    });


});