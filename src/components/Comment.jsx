import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/arissonlima.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Arisson Lima</strong>
              <time title="07 de Outubro de 2023" dateTime="2023-10-07 20:26:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}