interface CommentItemProps {
    comment: string;
}

export default function CommentItem({ comment }: CommentItemProps) {
    return (
        <div className="flex gap-3 py-4 border-b border-gray-200">
            <p className="text-gray-700">{comment}</p>
        </div>
    );
}