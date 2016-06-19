angular.module('ProductCtrl', ['ngMaterial']).controller('ProductController', function($scope, $routeParams, ProductService, CategoryService) {
    var self = this;
    ProductService.get($routeParams.param).success(function(data) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].Category) {
                data[i].searchText = data[i].Category.text;
            }
        }
        self.products = data;

        self.receiptId = $routeParams.param;
        CategoryService.get().success(function(categories) {
            $scope.data = categories;
        });

        self.addProductToCategory = function(category, product) {
            // console.log(JSON.stringify(category));
            // console.log(JSON.stringify(product));

            var autoIcon = $('#Auto' + product.SequenceNumber + 'Icon');
            console.log(autoIcon.attr('id'));
            autoIcon.removeClass('hide');
            autoIcon.fadeIn(600);

            ProductService
                .addCategory(self.receiptId, product.Sale.POSIdentity.POSItemID, category._id, category.text)
                .success(function(data) {

                });
        };
        self.addNewCategory = function(product, newCategory, fieldId) {
            console.log(newCategory);
            CategoryService.create(newCategory).success(function(data) {
                CategoryService.get().success(function(categories) {
                    $scope.data = categories;
                });

                ProductService
                    .addCategory(self.receiptId, product.Sale.POSIdentity.POSItemID, data._id, data.text)
                    .success(function(data) {});

                var autoChild = $('#' + fieldId);
                var el = angular.element(autoChild);
                el.scope().$mdAutocompleteCtrl.hidden = true;
                autoChild.focus();

                var autoIcon = $('#' + fieldId + 'Icon');
                console.log(autoIcon.attr('id'));
                autoIcon.removeClass('hide');
                autoIcon.fadeIn(600);

            });
        };
        self.querySearch = function(input) {
            console.log(input);

            input = input ? input.toLowerCase() : "";
            var ret = $scope.data.filter(function(d) {
                return d.text.toLowerCase().startsWith(input);
            });
            return ret;
        };
    });
});
