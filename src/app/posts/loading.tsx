const postsSkeletons = [1, 2, 3, 4, 5, 6];
const PostsLoading = () => {
  return (
    <div className="container m-auto px-4 animate-pulse">
      <div className="my-4 mx-auto w-full h-10 md:w-2/3 bg-gray-400"></div>
      <div className="flex items-center justify-center flex-wrap gap-7">
        {postsSkeletons.map((item) => (
          <div
            className="p-2 md:w-2/5 lg:w-1/4 h-40 bg-gray-400 border-2 border-blue-400 rounded-md"
            key={item}
          >
            <h2 className="bg-gray-200 h-4"></h2>
            <p className="bg-gray-600 h-4"></p>
            <div></div>
          </div>
        ))}
      </div>
            <div className="flex items-center justify-center mx-auto mt-8 mb-10 w-40 h-10 bg-gray-400"></div>
    </div>
  );
};

export default PostsLoading;
