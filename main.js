function MainController ($scope) {
  $scope.blogList = [];
  $scope.editIndex = -1
  $scope.submit = function(){
    if ($scope.editIndex == -1) {
      $scope.blogList.push({title:$scope.title, image:$scope.imageSelect, content:$scope.content})
      $scope.editIndex = $scope.blogList.length-1 
    } else {
      selectedIndex = $scope.editIndex
      updateData = $scope.blogList[selectedIndex];
      updateData.title = $scope.title
      updateData.image = $scope.imageSelect 
      updateData.content = $scope.content 
    }
    // console.log($scope.blogList);
  }

  $scope.editBlog = function(selectedIndex){
    updateData = $scope.blogList[selectedIndex];
    $scope.title = updateData.title
    $scope.imageSelect = updateData.image
    $scope.content = updateData.content
    $scope.editIndex = selectedIndex
  }

  $scope.newPage = function(){
    $scope.title = ""
    $scope.imageSelect = ""
    $scope.content = ""
    $scope.editIndex = -1
  }
}