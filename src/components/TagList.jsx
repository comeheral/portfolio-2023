import Tag from '@/components/Tag';
import '@/styles/components/TagList.scss';

function TagList({ className = "", tags }){
  return (
    <div className={`tag-list ${className}`}>
      {tags.map((tag, index) => (
        <Tag key={`tag-${index}`}>{tag}</Tag>
      ))}
    </div>
  )
}

export default TagList;