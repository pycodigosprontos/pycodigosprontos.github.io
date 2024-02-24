from PIL import Image

def redimensionar_imagem(caminho_imagem, largura_nova, altura_nova):
    try:
        imagem = Image.open(caminho_imagem)
        imagem_redimensionada = imagem.resize((largura_nova, altura_nova))
        imagem_redimensionada.save(r"C:\Users\sdietrich\Downloads\fermestj.github.io-main\pycodigosprontos.github.io - Copia\img\corrassel9.jpg")
        print("Imagem redimensionada com sucesso!")
    except Exception as e:
        print(f"Erro ao redimensionar a imagem: {e}")

# Exemplo de uso:
caminho_imagem = r"C:\Users\sdietrich\Downloads\fermestj.github.io-main\pycodigosprontos.github.io - Copia\img\corrassel9.jpg"
largura_nova = 286
altura_nova = 123

redimensionar_imagem(caminho_imagem, largura_nova, altura_nova)
