'use strict';

portfolio.controller('headerCtrl', ['$scope',
    function headerCtrl($scope){
        $scope.contacts = [{
            url: 'mailto:ivospasov89@gmail.com',
            imagePath: 'content/images/mail.png',
            alt: 'ivospasov89@gmail.com'
        },{
            url: 'https://www.linkedin.com/pub/ivo-spasov/107/929/644',
            imagePath: 'content/images/LinkedIn-Button-Copy.png',
            alt: 'linked in button'
        },{
            url: 'https://github.com/ivossss',
            imagePath: 'content/images/GitHub-Mark-Light-64px.png',
            alt: 'git hub button'
        }];
    }
]);